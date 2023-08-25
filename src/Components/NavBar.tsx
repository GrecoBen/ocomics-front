import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="flex justify-center space-x-8 font-semibold">
        <li className="nav-item">
          <Link to="/Acceuil" className="nav-link">Accueil</Link>
        </li>
        <li className="nav-item">
          <Link to="/Comics" className="nav-link">Comics</Link>
        </li>
        <li className="nav-item">
          <Link to="/ma-liste" className="nav-link">Ma liste</Link>
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