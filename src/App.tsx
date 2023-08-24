import React from 'react';;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel from './Components/Carousel';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer'


const App: React.FC = () => {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Routes>
        </Routes>
      <Carousel />  
      <Footer /> 
    </Router>
    </div>
    
  );
};

export default App;
