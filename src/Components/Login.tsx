import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const LOGIN_URL = 'http://localhost:8080/api/login_check';

const Login = () => {
  useEffect(() => {
    // Vérifie si un token d'accès est déjà stocké localement
    const token = localStorage.getItem('accessToken');

    // Effectue une requête pour obtenir les données de l'utilisateur connecté
    fetch('http://localhost:8080/api/user', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // Références aux éléments du formulaire et états des champs
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    // Met le focus sur le champ de l'utilisateur lors du chargement de la page
    userRef.current.focus();
  }, []);

  useEffect(() => {
    // Réinitialise le message d'erreur lorsque les champs de l'email ou du mot de passe changent
    setErrMsg('');
  }, [email, password]);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // Envoie une demande POST pour l'authentification
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: email, password: password }),
        {
          headers: { 'Content-Type': 'application/json' },
          // withCredentials: true
        }
      );

      console.log(JSON.stringify(response.data));
      const accessToken = response?.data?.token;
      const roles = response?.data?.roles;

      // Stocke le token en localStorage
      localStorage.setItem('accessToken', accessToken);

      // Met à jour l'état de l'authentification
      setAuth({
        email: email,
        password: password,
        roles: roles,
        accessToken: accessToken,
      });

      // Réinitialise les champs email et mot de passe
      setEmail('');
      setPwd('');

      // Redirige l'utilisateur vers la page précédente
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('Pas de réponse du serveur');
      } else if (err.response?.status === 400) {
        setErrMsg('Nom d\'utilisateur ou mot de passe manquant');
      } else if (err.response?.status === 401) {
        setErrMsg('Non autorisé');
      } else {
        setErrMsg('Échec de la connexion');
      }

      // Met le focus sur le champ de message d'erreur
      errRef.current.focus();
    }
  };

  return (
    <section>
      {/* Affiche le message d'erreur s'il y en a un */}
      <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
        {errMsg}
      </p>
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Adresse e-mail:</label>
        <input
          type="text"
          id="email"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={password}
          required
        />
        <button>Se connecter</button>
      </form>
      <p>
        Nouvel utilisateur ?<br />
        <span className="line">
          {/* Mettez le lien de routage ici */}
          <a href="/register">Inscrivez-vous !</a>
        </span>
      </p>
      <span>
        <a href="/">Accueil</a>
      </span>
    </section>
  );
}

export default Login;