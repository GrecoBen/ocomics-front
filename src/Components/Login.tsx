import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import "../assets/styles/login.css"
import axios from 'axios';

const LOGIN_URL = 'http://localhost:8080/api/login_check';


const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    console.log(email, password);

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
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
        
            console.log(JSON.stringify(response.data));
            const accessToken = response?.data?.token;
            const roles = response?.data?.roles;
        
            // Stocker le token en localStorage
            localStorage.setItem('accessToken', accessToken);
        
            setAuth({ email, password, roles, accessToken });
            setEmail('');
            setPwd('');
            setSuccess(true);
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
        <>
            {success ? (
                <section>
                    <h1>Vous êtes connecté !</h1>
                    <br />
                    <p>
                        <a href="/">Retourner à l'accueil</a>
                    </p>
                </section>
            ) : (
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
                            <a href="/register">Inscrivez-vous !</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login;