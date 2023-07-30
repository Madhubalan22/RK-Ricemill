import React from 'react';

import Home from './pages/home';
import About from "./pages/about";
import Contact from './pages/contact';
import Header from './components/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


const app=() =>{
  return (
    <>
   <div className="App">
   <Header/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        
      </Routes>
      
    </div>


    </>
  )
}

export default app;
