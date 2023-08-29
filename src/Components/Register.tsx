import React, { useState, useRef, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;  //pour valider l'username, indique que ça doit commencer par une majuscule et être suivie de 3 à 23 caractères dont number ou caractères spéciales
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; //au moins une lettre minuscule, une majuscule, un chiffre et un caractère spéciale

type Props = {}

const Register = (props: Props) => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false); //pour savoir si le name est validé ou non
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState(''); // si erreur
  const [success, setSuccess] = useState(false); // si succès

  useEffect(() => {                       // agit lorsque le composant est en charge
    userRef.current.focus();
  }, []);

  useEffect(() => {                        // useEffect appliqué à l'username et qui va v alidé ou non l'username
    setValidName(USER_REGEX.test(user));
  }, [user]);                                // user dans la dépendance donc à chaque fois qu'il change ça va checker sa validation

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])                       // pareil pour le mdp

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);



  return (
    <>
      
      <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
           <label htmlFor="username">
                Username:
                <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
            </label>
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
            />
            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
            </p>


            <label htmlFor="password">
                Password:
                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
            </label>
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
              />
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>


            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
            </label>
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
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>

            <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
      </form>
      <p>
          Already registered?<br />
          <span className="line">
              {/*put router link here*/}
              <a href="#">Sign In</a>
          </span>
        </p>
      </section>
      )}
    </>

  );
};

export default Register;

/* 

import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import Footer from './Footer';


const Register: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <div>
      <a href="/" className='hover:bg-yellow-600'>Accueil</a>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4">
          1. {isSignUp ? 'Inscription' : 'Connexion'}
        </h1>
        <Form name="auth-form" onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true, message: 'Veuillez entrer votre e-mail!' }]}>
            <Input placeholder="E-mail" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Veuillez entrer votre mot de passe!' }]}>
            <Input.Password placeholder="Mot de passe" />
          </Form.Item>
          {isSignUp && (
            <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Veuillez confirmer votre mot de passe!' }]}>
              <Input.Password placeholder="Confirmez le mot de passe" />
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              {isSignUp ? "S'inscrire" : 'Se connecter'}
            </Button>
          </Form.Item>
        </Form>
        <p onClick={() => setIsSignUp(!isSignUp)} className="text-blue-500 cursor-pointer">
          {isSignUp ? 'Déjà un compte ? Se connecter' : 'Pas encore de compte ? S\'inscrire'}
        </p>
      </div>
    </div>
    <Footer /> 
    </div>
  );
};

export default Register;



*/
