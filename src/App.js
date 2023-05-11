import React from 'react';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import About from "./pages/about";
import Contact from './pages/contact';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
    <Home/>
    </>
  )
}

export default App;
