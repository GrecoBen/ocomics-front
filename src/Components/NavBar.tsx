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
      <div className="bg-gradient-to-tr from-zinc-800 to-neutral-500 text-white h-32 bg-cover bg-center mx-4 md:mx-20">
        <img className="w-full h-32 object-cover mix-blend-overlay" src="https://wallup.net/wp-content/uploads/2016/01/45493-Spider-Man-comic_art-comics-superhero-Marvel_Comics-748x421.jpg" alt="" />
      </div>

      <nav className="bg-yellow-500 w-full shadow-xl font-semibold">
        <div className="flex items-center mx-4 md:mx-20">
          <div>
            <Link to="/">
              <img className="h-[3.5rem] w-24 rounded-md cursor-pointer mx-auto" src={Logo} alt="" />
            </Link>
          </div>
          <button className="lg:hidden block ml-auto mr-4 focus:outline-none">
            <svg className="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
          </button>
        </div>
        <ul className="lg:flex gap-8 text-sm mx-auto justify-center">
          <li>
            <Link to="/Comics" className='hover:bg-yellow-200 text-transform: uppercase'>Comics</Link>
          </li>
          <li>
            <Link to="/Personnages" className='hover:bg-yellow-200 text-transform: uppercase'>Personnages</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/ownlist" className='hover:bg-yellow-200 text-transform: uppercase'>Je possède</Link>
              </li>
              <li>
                <Link to="/wishlist" className='hover-bg-yellow-200 text-transform: uppercase'>Je recherche</Link>
              </li>
              <li>
                <button onClick={onLogout} className='hover-bg-yellow-200 text-transform: uppercase'>Se déconnecter</button>
              </li>
              <li>
                <Link to="https://grecoben-server.eddi.cloud/" className='hover-bg-yellow-200 text-transform: uppercase'>Back Office</Link>
              </li>
              <li>
                {isAuthenticated && (
                  <UserOutlined style={{ fontSize: '18px' }} />
                )}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/register" className='hover-bg-yellow-200 text-transform: uppercase'>Inscription</Link>
              </li>
              <li>
                <Link to="/login" className='hover-bg-yellow-200 text-transform: uppercase'>Se connecter</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
