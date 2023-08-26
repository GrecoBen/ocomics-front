import React from 'react';
import Characters from './Characters';
import Carousel from '../Components/Carousel';
import Comics from './Comics';

import NavBar from './NavBar';
import Footer from './Footer';


const Home: React.FC = () => {
  return (

    <div className="flex flex-col bg-gray-800 min-h-screen ">

      <div><NavBar /></div>
      
      <div><Carousel /></div>
      <section className="mx-56">
        <Comics />
        <h1 className='text-white font-bold mb-5 text-xl'>Les personnages</h1>
        <Characters />
        <h1 className='text-white text-center'>Tony Stark (Iron Man) : "Je préfère être un génie en herbe que l'homme le plus intelligent du cimetière."</h1>
        <div className='flex justify-center text-center m-4 md:my-16 text-white'>
        
          <p>
          "Tant que subsiste un souffle d'air dans mes poumons, je continuerai de vous défendre, quoi qu'il en coûte."
          </p>
        </div>
      </section>
      
      
     
      <Footer />

    </div>
    
  );
};
//<Characters />
export default Home;
