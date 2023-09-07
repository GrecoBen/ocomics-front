import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth'; 
import { useNavigate, useLocation, Link } from 'react-router-dom';
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


  const { setAuth } = useAuth(); // Utilisez le hook useAuth
 
  // Références aux éléments du formulaire et états des champs
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLParagraphElement | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPwd] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');

  useEffect(() => {
    // Met le focus sur le champ de l'utilisateur lors du chargement de la page
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Réinitialise le message d'erreur lorsque les champs de l'email ou du mot de passe changent
    setErrMsg('');
  }, [email, password]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      const accessToken = response?.data?.token;
      const roles = response?.data?.roles;

      // Stocke le token en localStorage
      localStorage.setItem('accessToken', accessToken);
      

      // Met à jour l'état de l'authentification
      const authData = {
        auth: true,
        email: email,
        roles: roles,
        accessToken: accessToken,
      };
      setAuth(authData);

      // Réinitialise les champs email et mot de passe
      setEmail('');
      setPwd('');

      // Redirige l'utilisateur vers la page précédente
      navigate(from, { replace: true });
    } catch (err) {      
      setErrMsg('Pas de réponse du serveur');      
      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  const handleLogout = () => {
    // Supprime le token d'accès du localStorage
    localStorage.removeItem('accessToken');

    // Réinitialise l'état de l'authentification
    const authData = {
      auth: false,
      email: '',
      roles: [],
      accessToken: '',
    };
    setAuth(authData);

    // Redirige l'utilisateur vers la page d'accueil (ou toute autre page souhaitée)
    navigate('/');
  };

  return (
    <section className=" flex flex-col bg-gray-800 min-h-screen flex flex-col justify-center items-center ">
  {/* Affiche le message d'erreur s'il y en a un */}
  <p ref={errRef} className={`text-red-500 ${errMsg ? 'block' : 'hidden'}`} aria-live="assertive">
    {errMsg}
  </p>
  <h1 className="text-3xl font-semibold mb-4 text-white">Se connecter</h1>
  <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-xl w-80">
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-600">Adresse e-mail:</label>
      <input
        type="text"
        id="email"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        className="w-full p-2 border border-gray-300 rounded mt-1"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Mot de passe:</label>
      <input
        type="password"
        id="password"
        onChange={(e) => setPwd(e.target.value)}
        value={password}
        required
        className="w-full p-2 border border-gray-300 rounded mt-1"
      />
    </div>

    <button className="bg-yellow-500 text-white hover:bg-yellow-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      Se connecter
    </button>
  </form>

  <button onClick={handleLogout} className="border rounded bg-yellow-500 text-cyan-950 inline-block hover:underline p-1 mt-5 font-semibold focus:outline-none">
    Se déconnecter
  </button>

  <p className="mt-4 text-yellow-600">
    Nouvel utilisateur ?<br />
    <span className="line">
      <Link to="/register" className="border-cyan-800 rounded bg-yellow-500 text-cyan-950 inline-block hover:underline p-1 my-4 mx-7 font-semibold shadow-xl">S'inscrire</Link>
    </span>
  </p>

  <span className="mt-1 text-gray-600">
    <Link to="/" className="text-yellow-600 shadow-xl text-lg hover:underline">Accueil</Link>
  </span>
</section>
  );
}

export default Login;
