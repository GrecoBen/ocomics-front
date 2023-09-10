import React from 'react';
import Logo from '../assets/Logo.png';
import { UserOutlined } from '@ant-design/icons';
import useAuth from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

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
          <ul className="lg:flex gap-8 text-sm mx-auto">
            <li>
              <Link to="/comics" className="hover:bg-yellow-200 uppercase">Comics</Link>
            </li>
            <li>
              <Link to="/Personnages" className="hover:bg-yellow-200 uppercase">Personnages</Link>
            </li>
            <li>
              {isAuthenticated ? (
                <Link to="/ownlist" className="hover:bg-yellow-200 uppercase">Je possède</Link>
              ) : (
                <Link to="/register" className="hover:bg-yellow-200 uppercase">Inscription</Link>
              )}
            </li>
            <li>
              {isAuthenticated ? (
                <Link to="/wishlist" className="hover:bg-yellow-200 uppercase">Je recherche</Link>
              ) : (
                <Link to="/login" className="hover:bg-yellow-200 uppercase">Se connecter</Link>
              )}
            </li>
            <li>
              {isAuthenticated ? (
                <button onClick={onLogout} className="hover:bg-yellow-200 uppercase">Se déconnecter</button>
              ) : (
                <></>
              )}
            </li>
            <li>
              {isAuthenticated ? (
                <Link to="https://grecoben-server.eddi.cloud/" className="hover:bg-yellow-200 uppercase">Back Office</Link>
              ) : (
                null // Ou <></> si vous préférez
              )}
            </li>
            <li>
              {isAuthenticated && (
                <UserOutlined style={{ fontSize: '18px' }} />
              )}
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
