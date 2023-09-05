import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import { Link } from 'react-router-dom';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>       
            {success ? (
                <section>
                    <h1>Vous avez réussi !</h1>
                    <p>
                        <a href="/login">Connectez-vous !</a>
                    </p>
                </section>
            ) : (
              <section className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
              <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <p ref={errRef} className={`text-red-500 ${errMsg ? 'block' : 'hidden'}`} aria-live="assertive">
                  {errMsg}
                </p>
                <h1 className="text-3xl font-semibold mb-4">Inscription</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-600">Nom d'utilisateur:</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                      />
                      <FontAwesomeIcon icon={faCheck} className={`absolute right-3 top-3 ${validName ? 'text-green-500' : 'hidden'}`} />
                      <FontAwesomeIcon icon={faTimes} className={`absolute right-3 top-3 ${validName || !user ? 'hidden' : 'text-red-500'}`} />
                    </div>
                    <p id="uidnote" className={`mt-1 text-xs ${userFocus && user && !validName ? 'text-red-500' : 'offscreen'}`}>
                      <FontAwesomeIcon icon={faInfoCircle} />
                      4 à 24 caractères.<br />
                      Doit commencer par une lettre.<br />
                      Les lettres, les chiffres, les traits de soulignement et les traits d'union sont autorisés.
                    </p>
                  </div>
            
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600">Mot de passe:</label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                      />
                      <FontAwesomeIcon icon={faCheck} className={`absolute right-3 top-3 ${validPwd ? 'text-green-500' : 'hidden'}`} />
                      <FontAwesomeIcon icon={faTimes} className={`absolute right-3 top-3 ${validPwd || !pwd ? 'hidden' : 'text-red-500'}`} />
                    </div>
                    <p id="pwdnote" className={`mt-1 text-xs ${pwdFocus && !validPwd ? 'text-red-500' : 'offscreen'}`}>
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 à 24 caractères.<br />
                      Doit inclure un minuscule, une majuscule, un chiffre et un caractère spécial.<br />
                      Caractères spéciaux acceptés: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
                  </div>
            
                  <div className="mb-4">
                    <label htmlFor="confirm_pwd" className="block text-gray-600">Confirmer le mot de passe:</label>
                    <div className="relative">
                      <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                      />
                      <FontAwesomeIcon icon={faCheck} className={`absolute right-3 top-3 ${validMatch && matchPwd ? 'text-green-500' : 'hidden'}`} />
                      <FontAwesomeIcon icon={faTimes} className={`absolute right-3 top-3 ${validMatch || !matchPwd ? 'hidden' : 'text-red-500'}`} />
                    </div>
                    <p id="confirmnote" className={`mt-1 text-xs ${matchFocus && !validMatch ? 'text-red-500' : 'offscreen'}`}>
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Doit correspondre au premier mot de passe saisi.
                    </p>
                  </div>
            
                  <button
                    type="submit"
                    className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    disabled={!validName || !validPwd || !validMatch ? true : false}
                  >
                    S'inscrire
                  </button>
                </form>
            
                <p className="mt-4 text-gray-600">
                  Déjà inscrit ?<br />
                  <span className="line">
                    <a href="/login" className="text-blue-500 hover:underline">Connectez-vous !</a>
                  </span>
                </p>
            
                <span className="mt-4 text-gray-600">
                  <Link to="/" className="text-blue-500 hover:underline">Accueil</Link>
                </span>
              </div>
            </section>
            
            )}
        </>
    )
}

export default Register;