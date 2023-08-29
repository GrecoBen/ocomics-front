import React from 'react';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Characters from '../Components/Characters';

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

