import React from 'react';



const Navbar: React.FC = () => {
  return (

    <nav className="navbar font-sans ">                              
       <ul className="h-full w-full  border-5 p-3 flex justify-center space-x-8 bg-amber-400 text-white border-black-5 ">
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
        <input />
      </div>
    </nav>
    
  );
};




export default Navbar;