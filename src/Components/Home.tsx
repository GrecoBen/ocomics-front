import React from 'react';
import Characters from './Characters';
import Carousel from '../Components/Carousel';
import Comics from './Comics';

import NavBar from './NavBar';

const Home: React.FC = () => {
  return (

    <div className="bg-slate-900 min-h-screen">
      <NavBar />
      <Carousel />
      <Comics />
      <Characters />
      <h1>Bienvenue Sur O'Comics</h1>
      <div className='flex justify-center text-center m-4 md:my-16'>
      <p>
        O/comics est la plateforme idéale pour les passionnés de comics. Découvrez de nouveaux comics, échangez avec d'autres membres et complétez vos collections.
        Rejoignez notre communauté pour partager votre passion 
        et discuter avec d'autres fans de comics!
      </p>
      </div>
        

    </div>
  );
};
//<Characters />
export default Home;
