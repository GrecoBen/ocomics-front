import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';


const LOGIN_URL = 'http://localhost:8080/api/login_check';



const Login = () => {

    useEffect(() => {
        const token = localStorage.getItem('accessToken'); 
    
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
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    

    //console.log(email, password);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ 'email': email, 'password': password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                   // withCredentials: true
                }
            );
        
            console.log(JSON.stringify(response.data));
            const accessToken = response?.data?.token;
            const roles = response?.data?.roles;
        
            // Stocker le token en localStorage
            localStorage.setItem('accessToken', accessToken);
        
            setAuth({ 
                'email': email, 
                'password': password, 
                'roles': roles, 
                'accessToken': accessToken 
            });
            setEmail('');
            setPwd('');
            navigate(from, {replace: true});
        } catch (err) { 
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (

        
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
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
                    {/*put router link here*/}
                    <Link to="/register">Inscrivez-vous !</Link>
                    
                </span>
                
            </p>
                <span>
                    <Link to="/">Accueil</Link>
                </span>
        </section>
        
    )
}

export default Login;

/* 



*/