import React from 'react';
import Characters from './Characters';
import Carousel from '../Components/Carousel';
import ComicsCard from './ComicsCard';
import Comics from './Comics';

const Home: React.FC = () => {
  return (
    <div>
      
      <Carousel />
      <h1>Bienvenue Sur O'Comics</h1>
      <p>
        O/comics est la plateforme idéale pour les passionnés de comics. Découvrez de nouveaux comics, échangez avec d'autres membres et complétez vos collections.
      </p>
      <p>
        Rejoignez notre communauté pour partager votre passion et discuter avec d'autres fans de comics!
      </p>
      <Comics />
      <Characters />
        
    </div>
  );
};

export default Home;
