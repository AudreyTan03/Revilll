import React from 'react';
import './App.css';
import Navbar from './Components/Landingpage/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Landingpage/pages/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
// import Footer from './Components/Landingpage/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Render Login component when accessing /login */}
          <Route path="/login" element={<Login />} />
          {/* Render Register component when accessing /register */}
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
