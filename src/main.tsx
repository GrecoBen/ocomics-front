import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './context/AuthProvider';
import { HashRouter, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
    <AuthProvider>
      <Routes>
      <Route path="/*" element={<App />} />
      </Routes>
    </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
);
