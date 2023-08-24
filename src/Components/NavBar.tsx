import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="flex justify-center space-x-8">
        <li className="nav-item">
          <a href="/Home" className="nav-link">Accueil</a>
        </li>
        <li className="nav-item">
          <Link to="/Comics" className="nav-link">Comics</Link>
        </li>
        <li className="nav-item">
          <Link to="/ma-liste" className="nav-link">Ma liste</Link>
        </li>
        <li className="nav-item">
          <a href="/Personnages" className="nav-link">Personnages</a>
        </li>
        <li className="nav-item ml-auto">
          <a href="/register" className="nav-link">Se connecter</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
