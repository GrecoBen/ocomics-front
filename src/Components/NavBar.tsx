import React from 'react'; 
import Logo from '../assets/Logo.png'; 
import { Link } from 'react-router-dom'; 
import { UserOutlined } from '@ant-design/icons'; 

// Définition des types des propriétés (props) attendues par le composant Navbar
type NavbarProps = {
  isAuthenticated: boolean; // Un booléen pour vérifier si l'utilisateur est authentifié
  onLogout: () => void; // Une fonction de rappel pour gérer la déconnexion
}

// Définition du composant Navbar en tant que composant fonctionnel React
const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, onLogout }) => {
  return (
    // La structure HTML de la barre de navigation
    <nav className="container mx-auto bg-yellow-500"> {/* Un élément de navigation avec une classe CSS */}
      <div className="flex h-14 items-center justify-between border-slate-200"> {/* Un conteneur flexible avec des éléments centrés et justifiés */}
        <Link to="/"> {/* Un lien de navigation vers la page d'accueil */}
          <img className="h-12 w-24 rounded-md cursor-pointer" src={Logo} alt="" /> {/* Une image de logo */}
        </Link>
        <ul className="hidden gap-8 text-sm font-semibold md:flex"> {/* Une liste non ordonnée pour les liens de navigation */}
          <li>
            <Link to="/Comics" className='hover:bg-yellow-600'>Comics</Link> {/* Lien vers la page "Comics" */}
          </li>
          <li>

            <Link to="/Personnages" className='hover:bg-yellow-600'>Personnages</Link> {/* Lien vers la page "Personnages" */}
          </li>
          {isAuthenticated ? ( // Condition pour vérifier si l'utilisateur est authentifié
            <>
              <li>
                <Link to="/possede" className='hover:bg-yellow-600'>Je possède</Link> {/* Lien vers la page "Je possède" */}
              </li>
              <li>
                <Link to="/recherche" className='hover:bg-yellow-600'>Je recherche</Link> {/* Lien vers la page "Je recherche" */}
              </li>
              <li>
                <button onClick={onLogout} className='hover:bg-yellow-600'>Se déconnecter</button> {/* Bouton pour se déconnecter */}
              </li>
              <li>
                {isAuthenticated && ( // Afficher l'icône d'utilisateur uniquement si l'utilisateur est authentifié
                  <UserOutlined style={{ fontSize: '18px' }} /> 
                )}
              </li>
            </>
          ) : ( // Si l'utilisateur n'est pas authentifié, afficher les liens d'inscription et de connexion
            <>
              <li>
                <Link to="/register" className='hover:bg-yellow-600'>Inscription</Link> {/* Lien vers la page d'inscription */}
              </li>
              <li>
                <Link to="/login" className='hover:bg-yellow-600'>Se connecter</Link> {/* Lien vers la page de connexion */}
              </li>
            </>
          )}
        </ul>
        <div className="flex gap-4"> {/* Un conteneur flexible pour les éléments à droite de la barre de navigation */}
          <input placeholder="recherche..." className="rounded-md w-24 border-2 border-slate-200 md:w-32" type="text" /> {/* Champ de recherche */}
          <button className="block md:hidden"> {/* Bouton pour afficher le menu sur les écrans mobiles */}
            <svg className="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
