import React from 'react'
import { Link } from 'react-router-dom'
//import { Navbar, Nav, Container } from 'react-bootstrap'
import './Header.css'
import logo from '../images/logo.png'
const Header = () => {
  return (
    <>
    <nav className='navbar'>
      
        <a href='index.js'>
        <img className='logo' src={logo} alt='logo' height={70} width={70}></img>
        </a>
        <ul id='navitems'>
        <Link className='link'to='/home'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link'to='/contact'>Contact</Link>
        </ul>
    </nav>
    </>
  )
}

export default Header