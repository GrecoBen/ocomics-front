import { createContext, useState, useEffect } from "react";

// Créez un contexte pour l'authentification
const AuthContext = createContext({});

// Créez un composant fournisseur d'authentification qui englobe les enfants avec le contexte d'authentification
export const AuthProvider = ({ children }) => {
    // Utilisez l'état local pour stocker les données d'authentification
    const [auth, setAuth] = useState({});

    // Utilisez useEffect pour récupérer les données d'authentification depuis le stockage local lorsque le composant est monté
    useEffect(() => {
        const value = JSON.parse(window.localStorage.getItem('auth'));
        if (Object.keys(value).length > 0) {
            console.log(value)
            setAuth(value);
        }
    }, []);

    // Utilisez useEffect pour mettre à jour le stockage local lorsque les données d'authentification changent
    useEffect(() => {
        console.log('%c test', 'color:red', auth)
        if (Object.keys(auth).length > 0) {
            // Stockez les données d'authentification dans le stockage local au format JSON
            window.localStorage.setItem('auth', JSON.stringify(auth));
        }
    }, [auth]);

    // Rendre le contexte d'authentification disponible pour les composants enfants
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
