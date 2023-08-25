
import React from 'react';;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Characters from './Components/Characters';
import Home from './Components/Home';
import Comics from './Components/Comics';
import Register from './Components/Register';
import NavBar from './Components/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>  
      <NavBar />      
        <Routes>   
        <Route path="/" element={<Home />} />                 
          <Route path="/Home" element={<Home />} />
          <Route path="/comicsCard" element={<Comics />} />
          <Route path="/characters" element={<Characters />} /> 
          <Route path="/register" element={<Register />} />                   
        </Routes>                    
        <Footer />
      </Router>
    </div>
  );
};

export default App;

