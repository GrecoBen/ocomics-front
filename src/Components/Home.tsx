import React from 'react';
import Characters from './Characters';
import Carousel from '../Components/Carousel';
import Comics from './Comics';
const Home: React.FC = () => {
  return (
    <div>      
      <Carousel />
      <Comics />
      <Characters />
        
    </div>
  );
};

export default Home;
