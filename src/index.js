import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StrictMode>
    <BrowserRouter>
      
      <App />
      <Footer/>
    </BrowserRouter>
  </StrictMode>

);

