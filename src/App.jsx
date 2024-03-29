import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/HomePage';
import NavBar from './components/Home/Navbar';
import HeroSection from './components/Home/HeroSection';
import MySkills from './components/Home/MySkills';
import MyProjects from './components/Home/MyProjects';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactMe from './components/Home/ContactMe';
import Footer from './components/Home/Footer';


function App() {
  return (
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
            <Route path='/footer' element={<Footer />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
