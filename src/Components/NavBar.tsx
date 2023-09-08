import React from 'react';
import Logo from '../assets/Logo.png';
import { UserOutlined } from '@ant-design/icons';
import useAuth from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

type NavbarProps = {
  isAuthenticated: boolean;
}

/*
const Image = [
  'https://i.imgur.com/mXF3trR.jpeg',"
];

<img
            src={imageUrl}
            alt={`Image-${index}`}
            style={{ ...contentStyle, width: '100%', objectFit: 'cover'  }}
            className="h-full"
          />
*/


// Définition du composant Navbar en tant que composant fonctionnel React
const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();


  const onLogout = () => {
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
  // file:///home/student/T%C3%A9l%C3%A9chargements/batman-2216148_1280.jpg
  isAuthenticated = auth.auth
  return (
    <section className="">
      <div className="bg-gradient-to-tr from-zinc-800 to-neutral-500 text-white h-32 bg-cover bg-center mx-20">
        <img className="w-full h-32 object-cover mix-blend-overlay" src="https://wallup.net/wp-content/uploads/2016/01/45493-Spider-Man-comic_art-comics-superhero-Marvel_Comics-748x421.jpg" />
      </div>

      <nav className=" bg-yellow-500  shadow-xl font-semibold">

        <div className="flex items-center mx-20 md:mx-20">
          {/*<div className=""> */}
          <div>
            <Link to="/"> {/* Un lien de navigation vers la page d'accueil */}
              <img className="h-[3.5rem] w-24 rounded-md cursor-pointer" src={Logo} alt="" />
            </Link>
          </div>
          <ul className=" hidden gap-8 text-sm mx-auto lg:flex">
            
            <li>
              <Link to="/Comics" className='hover:bg-yellow-200 text-transform: uppercase'>Comics</Link>
            </li>
            <li>
              <Link to="/Personnages" className='hover:bg-yellow-200 text-transform: uppercase'>Personnages</Link>
            </li>
          </ul>
          {isAuthenticated ? ( // Condition pour vérifier si l'utilisateur est authentifié
              <ul className=" hidden items-center gap-8 text-sm lg:flex">
                <li>
                  <Link to="/ownlist" className='hover:bg-yellow-200 text-transform: uppercase'>Je possède</Link>
                </li>
                <li>
                  <Link to="/wishlist" className='hover:bg-yellow-200 text-transform: uppercase'>Je recherche</Link>
                </li>
                <li>
                  <button onClick={onLogout} className='hover:bg-yellow-200 text-transform: uppercase'>Se déconnecter</button>
                </li>
                <li>
                  <Link to="https://grecoben-server.eddi.cloud/" className='hover:bg-yellow-200 text-transform: uppercase'>Back Office</Link>
                </li>
                <li>                  
                  {isAuthenticated && ( // Afficher l'icône d'utilisateur uniquement si l'utilisateur est authentifié
                    <UserOutlined style={{ fontSize: '18px' }} />
                  )}
                </li>
              </ul>              
          ) : ( // Si l'utilisateur n'est pas authentifié, afficher les liens d'inscription et de connexion
            <div className="">
              <ul className="hidden items-center text-sm mx-auto gap-8 lg:flex">
                <li>
                  <Link to="/register" className='hover:bg-yellow-200 text-transform: uppercase'>Inscription</Link>
                </li>
                <li>
                  <Link to="/login" className='hover:bg-yellow-200 text-transform: uppercase'>Se connecter</Link>
                </li>                
              </ul>

            </div>
          )}

          <div className="flex  gap-4">

            <button className="block lg:hidden">
              <svg className="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
            </button>
          </div>
          {/*</div>*/}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;