import React from 'react';;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Comics from './Components/Comics';
import Register from './Components/Register';
import CharactersList from './Components/Pages/CharactersList';

const App: React.FC = () => {
  return(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comics" element={<ComicsPage/>} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;

/*

<Route path="/" element={<Home />} />

import React from 'react';;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Characters from './Components/Characters';
import Home from './Pages/Home';
import Comics from './Components/Comics';
import Register from './Components/Register';
import NavBar from './Components/NavBar';



return (
    <div className="">
      <Router>            
        <Routes>   
          <Route path="/" element={<Home />} />                 
          <Route path="/Home" element={<Home />} />
          <Route path="/comicsCard" element={<Comics />} />
          <Route path="/characters" element={<CharactersList />} /> 
          <Route path="/register" element={<Register />} />                   
        </Routes>                            
      </Router>
         </div>    
  );

*/