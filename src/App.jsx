import { useState } from 'react'
import './App.css'
import React from 'react';
import Home from './components/Home/HomePage';
import NavBar from './components/Home/Navbar';
import HeroSection from './components/Home/HeroSection';
import MySkills from './components/Home/MySkills';
import MyProjects from './components/Home/MyProjects';
import ContactMe from './components/Home/ContactMe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hero' element={<HeroSection />} />
            <Route path='/skills' element={<MySkills />} />
            <Route path='/projects' element={<MyProjects />} />
            <Route path='/contact' element={<ContactMe />} />
          </Routes>
        </div>
      </Router>
    </div>
    </>
  )
}

export default App
