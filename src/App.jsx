import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import Forgot from './pages/forgotpass';
import NotFound from './pages/404page';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Forgot/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;