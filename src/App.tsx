import React from 'react';;

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Registerr from './Components/Registerr';
import CharactersList from './Pages/CharactersList';
import ComicsPage from './Pages/ComicsPage';

const App: React.FC = () => {
  return(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comics" element={<ComicsPage/>} />
      <Route path="/Personnages" element={<CharactersList/>} />
      <Route path="/register" element={<Registerr/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

/*


*/