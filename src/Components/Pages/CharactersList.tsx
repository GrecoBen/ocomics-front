import React from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';
import Characters from '../Characters';

const CharacterImage: React.FC = () => {
return (
<div> 
    <Navbar/>
    <Characters /> 
    <Footer /> 
    </div>
)
};


export default CharacterImage;

function setResultAPI2(data: any) {
  throw new Error('Function not implemented.');
}

