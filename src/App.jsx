import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import Forgot from './pages/forgotpass';
import Perfil from './pages/perfil';
import NotFound from './pages/404page';
import Results from './pages/results';
import ExamSelect from './pages/examselect';
import Exam from './pages/exam';
import About from './pages/about'
import Privacy from './pages/privacy';
import Terms from './pages/terms'
import './index.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/reset" element={<Forgot/>} />
        <Route path="/result" element={<Results/>} />
        <Route path="/exam" element={<Exam/>} />
        <Route path="/examSelect" element={<ExamSelect/>} />
        {/* <Route path="/exam/:subject" element={<Exam/>} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<Privacy/>} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );  
}

export default App;