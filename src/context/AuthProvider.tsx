import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

 /*   useEffect(() => {
        const value = JSON.parse(window.localStorage.getItem('auth'));
        if (Object.keys(value).length > 0) {
            console.log(value)
            setAuth(value)
        }
    }, [])
    useEffect(() => {
        console.log('%c test', 'color:red', auth)
        if (Object.keys(auth).length > 0) {
            window.localStorage.setItem('auth', JSON.stringify(auth));
        }
    }, [auth])
*/
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;