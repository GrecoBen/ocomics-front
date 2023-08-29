import React from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    <nav className="container mx-auto bg-yellow-500">
      <div className="flex h-14 items-center justify-between border-slate-200">
          <Link to="/"> <img className="h-12 w-24 rounded-md cursor-pointer" src={Logo} alt="" /></Link>
          <ul className="hidden gap-8 text-sm font-semibold md:flex">

          <li>
              <Link to="/Comics" className='hover:bg-yellow-600'>Comics</Link>
            </li>
            <li>
            <Link to="/Personnages" className='hover:bg-yellow-600'>Personnages</Link>
            </li>
            <li>
            <Link to="/Inscription" className='hover:bg-yellow-600'>Inscription</Link>
            </li>
            <li >
            <Link to="/register" className='hover:bg-yellow-600'>Se connecter</Link>
            </li>
          </ul>
          <div className="flex gap-4">
              <input placeholder="recherche..." className="rouned-md w-24 border-2 border-slate-200 md:w-32" type="text" />
            <div className="h-6 w-6 rounded-full bg-black"></div>
              <button className="block md:hidden">
                <svg className="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
              </button>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;