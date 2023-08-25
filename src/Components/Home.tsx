import React from 'react';
import Characters from './Characters';
import Carousel from '../Components/Carousel';
import Comics from './Comics';

const Home: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="">
        <Carousel />
        <Comics />
        <Characters />
      </div>
    </div>
  );
};

export default Home;
