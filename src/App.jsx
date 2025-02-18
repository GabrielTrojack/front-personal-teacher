import React, { useEffect, useState } from 'react';
import Home from './pages/home';
import Signup from './pages/signup';
import './index.css';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  useEffect(() => {
    const path = window.location.pathname;  // Verifica a URL atual
    if (path === '/cadastro') {
      setCurrentPage('signup');
    } else {
      setCurrentPage('home');
    }
  }, []);

 return (
    <>
      {currentPage === 'home' ? <Home /> : <Signup />}
    </>
  );
}

export default App;
