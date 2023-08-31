import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import CharactersList from './Pages/CharactersList';
import ComicsPage from './Pages/ComicsPage';
import Register from './Components/Register';
import Login from './Components/Login';
import Layout from './Components/Layout';
import OwnPage from './Pages/OwnPage';
import WishPage from './Pages/WishPage';
import Unauthorized from './Components/Unauthorized';
import Lounge from './Components/Lounge';

const App: React.FC = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />} >
            {/*public routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<ComicsPage/>} />
          <Route path="/Personnages" element={<CharactersList/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/unauthorized" element={<Unauthorized/>} />
            {/*protected routes*/}
          <Route path="/ownlist" element={<OwnPage/>} />
          <Route path="/wishlit" element={<WishPage/>} />
          <Route path="/lounge" element={<Lounge/>} />  
        </Route>
      </Routes>
    
  );
};

export default App;

