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
            <Link to="/register" className='hover:bg-yellow-600'>Inscription</Link>
            </li>
            <li >
            <Link to="/login" className='hover:bg-yellow-600'>Se connecter</Link>
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


 /*

<Link to="/ma-liste" className='hover:bg-yellow-600'>Ma Liste</Link>
<Link to="/Personnages" className='hover:bg-yellow-600'>Personnages</Link>
<Link to="/Personnages" className='hover:bg-yellow-600'>Personnages</Link>

 <a href="/Comics" className='hover:bg-yellow-600' >Comics</a>

 <div className='mx-10 bg-amber-400'>
    <nav className="navbar font-sans ">   
       <ul className="h-full w-full  border-5 p-3 flex justify-center space-x-8 text-white border-black-5 ">
        <li className="nav-item ">
          <a href="/" className="nav-link">Accueil</a>
        </li>
        <li className="nav-item">
          <a href="/Comics" className="nav-link">Comics</a>
        </li>
        <li className="nav-item">
          <a  href="/ma-liste" className="nav-link">Ma liste</a>
        </li>
        <li className="nav-item">
          <a href ="/Personnages" className="nav-link">Personnages</a>
        </li>
        <li className="nav-item ml-auto">
          <a href ="/register" className="nav-link  ">Se connecter</a>
        </li>
      </ul>
      <div>
       
      </div>
    </nav>
    </div>
    
    
     <ul className="hidden gap-8 text-sm font-semibold md:flex">
        <li>
          <a href="/" >Accueil</a>
        </li>
        <li>
          <a href="/Comics">Comics</a>
        </li>
        <li>
          <a  href="/ma-liste">Ma liste</a>
        </li>
        <li>
          <a href ="/Personnages">Personnages</a>
        </li>
        <li >
          <a href ="/register">Se connecter</a>
        </li>
      </ul>
    
    */ 



export default Navbar;