import './CSS/App.css';
import './CSS/HeroSection.css'
import './CSS/Navbar.css'
import './CSS/Skills.css'
import './CSS/AboutMe.css'
import './CSS/Portfolio.css'
import './CSS/Testimonial.css'
import './CSS/Contact.css'
import './CSS/Footer.css'
import './CSS/Responsive.css'
import React from 'react';
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutMe from './Pages/Home/AboutMe';



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}>
            <Route path='/' element={<div>
                404 not found
              </div>}></Route>
              <Route path='/' element={<AboutMe/>}></Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;