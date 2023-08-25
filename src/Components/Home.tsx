import React from 'react';
import Characters from './Characters';
import NavBar from './NavBar';
import Carousel from '../Components/Carousel';
import Comics from './Comics';

const Home: React.FC = () => {
  return (
    <div className=''>
      <NavBar />
      <Carousel />
      <Comics />
      <Characters />
      <h1>Bienvenue Sur O'Comics</h1>
      <p>
        O/comics est la plateforme idéale pour les passionnés de comics. Découvrez de nouveaux comics, échangez avec d'autres membres et complétez vos collections.
      </p>
      <p>
        Rejoignez notre communauté pour partager votre passion et discuter avec d'autres fans de comics!
      </p>
      
        
    </div>
  );
};

export default Home;