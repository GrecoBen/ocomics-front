import React from 'react';;

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import CharactersList from './Pages/CharactersList';
import ComicsPage from './Pages/ComicsPage';
import Register from './Components/Register';
import Login from './Components/Login';

const App: React.FC = () => {
  return(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comics" element={<ComicsPage/>} />
      <Route path="/Personnages" element={<CharactersList/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

/*


*/