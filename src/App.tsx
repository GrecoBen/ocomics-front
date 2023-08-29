import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import CharactersList from './Pages/CharactersList';
import ComicsPage from './Pages/ComicsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/Personnages" element={<CharactersList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
