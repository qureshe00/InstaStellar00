import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import background from "./ActiveSun_NuSTAR_960.jpg";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Search from './components/Search';

function App() {
  return (
    <>
  
    <Navbar/>
    <Home/>
  
    
    </>

  );
}

export default App;
