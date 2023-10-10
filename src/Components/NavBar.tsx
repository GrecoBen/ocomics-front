import React, { useContext, useState } from 'react';
import Logo from '../assets/Logo.png';
import { UserOutlined } from '@ant-design/icons';
import useAuth from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';

type NavbarProps = {
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('accessToken');
    const authData = {
      auth: false,
      email: '',
      roles: [],
      accessToken: '',
    };
    setAuth(authData);
    navigate('/');
  };

  isAuthenticated = auth.auth;

  const { auth: authContext } = useContext(AuthContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="">
      <div className="bg-gradient-to-tr from-zinc-800 to-neutral-500 text-white h-32 bg-cover bg-center mx-20">
        <img className="w-full h-32 object-cover mix-blend-overlay" src="https://wallup.net/wp-content/uploads/2016/01/45493-Spider-Man-comic_art-comics-superhero-Marvel_Comics-748x421.jpg" alt="" />
      </div>

      <nav className="bg-yellow-500 w-full shadow-xl font-semibold">
        <div className="flex items-center mx-20 md:mx-20">
          <div>
            <Link to="/">
              <img className="h-[3.5rem] w-24 rounded-md cursor-pointer" src={Logo} alt="" />
            </Link>
          </div>
          <button className="md:hidden ml-auto block p-2" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Les éléments du menu bureau */}
          <ul className="hidden md:flex space-x-4 ml-auto">
            <li>
              <Link to="/comics" className="block py-2">Comics</Link>
            </li>
            <li>
              <Link to="/Personnages" className="block py-2">Personnages</Link>
            </li>
            {/* Ajoutez ici d'autres éléments du menu bureau si nécessaire */}
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/ownlist" className="block py-2">Je possède</Link>
                </li>
                <li>
                  <Link to="/wishlist" className="block py-2">Je recherche</Link>
                </li>
                <li>
                  <button onClick={onLogout} className="block py-2">Se déconnecter</button>
                </li>
                <li>
                  <Link to="https://grecoben-server.eddi.cloud/" className="block py-2">Back Office</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/register" className="block py-2">Inscription</Link>
                </li>
                <li>
                  <Link to="/login" className="block py-2">Se connecter</Link>
                </li>
              </>
            )}
            {isAuthenticated && (
              <li>
                <span className="block py-2" style={{ fontStyle: 'italic', fontWeight: 'lighter' }}>
                  Bienvenue <span style={{ fontStyle: 'italic', fontWeight: 'lighter' }}>{authContext.email}</span>
                </span>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <UserOutlined style={{ fontSize: '18px' }} />
              </li>
            )}
          </ul>
        </div>
        
        {isMobileMenuOpen && (
          <div>
            <ul className="bg-yellow-500 space-y-2">
              <li>
                <Link to="/comics" className="block py-2">Comics</Link>
              </li>
              <li>
                <Link to="/Personnages" className="block py-2">Personnages</Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link to="/ownlist" className="block py-2">Je possède</Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="block py-2">Je recherche</Link>
                  </li>
                  <li>
                    <button onClick={onLogout} className="block py-2">Se déconnecter</button>
                  </li>
                  <li>
                    <Link to="https://grecoben-server.eddi.cloud/" className="block py-2">Back Office</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/register" className="block py-2">Inscription</Link>
                  </li>
                  <li>
                    <Link to="/login" className="block py-2">Se connecter</Link>
                  </li>
                </>
              )}
              {isAuthenticated && (
                <li>
                  <span className="block py-2" style={{ fontStyle: 'italic', fontWeight: 'lighter' }}>
                    Bienvenue <span style={{ fontStyle: 'italic', fontWeight: 'lighter' }}>{authContext.email}</span>
                  </span>
                </li>
              )}
              {isAuthenticated && (
                <li>
                  <UserOutlined style={{ fontSize: '18px' }} />
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;