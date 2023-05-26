import React from 'react';
//import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo1.png';

//Bem --> Modificador de Bloque de Elementos

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links-logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#home'>Home</a></p>
          <p><a href='#home'>Home</a></p>
          <p><a href='#home'>Home</a></p>
          <p><a href='#home'>Home</a></p>
      </div>
    </div>
      <div className='gpt3__navbar-sing'>
        <p>Sing in</p>
        <button type='button'>Sing up</button>
      </div>
  </div>
  )
}

export default Navbar
