import React from 'react';
import Logo from '../assets/Logo.png'


const Navbar: React.FC = () => {
  return (
    <nav className="container mx-auto bg-yellow-500">
      <div className="flex h-14 items-center justify-between border-slate-200">
          <img className="h-12 w-24 rounded-md cursor-pointer" src={Logo} alt="" />
          <ul className="hidden gap-8 text-sm font-semibold md:flex">
        <li>
          <a href="/" className='hover:bg-yellow-600'>Accueil</a>
        </li>
        <li>
          <a href="/Comics" className='hover:bg-yellow-600' >Comics</a>
        </li>
        <li>
          <a  href="/ma-liste" className='hover:bg-yellow-600'>Ma liste</a>
        </li>
        <li>
          <a href ="/Characters" className='hover:bg-yellow-600'>Personnages</a>
        </li>
        <li >
          <a href ="/register" className='hover:bg-yellow-600'>Se connecter</a>
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