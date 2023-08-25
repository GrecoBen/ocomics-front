import React from 'react';


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">

      <ul className="flex justify-center space-x-8">     
        <li className="nav-item"> 
                   
      <ul className="flex justify-center space-x-8">
        <li className="nav-item">
          <Link to="/Acceuil" className="nav-link">Acceuil</Link>

        </li>
        <li className="nav-item">
          <a href="/Comics" className="nav-link">Comics</a>
        </li>
        <li className="nav-item">
          <a  href="/ma-liste" className="nav-link">Ma liste</a>
        </li>
        <li className="nav-item">
          <Link to="/Personnages" className="nav-link">Personnages</Link>
        </li>
        <li className="nav-item ml-auto">
          <Link to="/register" className="nav-link">Se connecter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;