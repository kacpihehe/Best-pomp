import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo_bp.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bestpomp-navbar-container'>
      <img src={logo} alt='Logo' className='bestpomp-navbar-logo' />
      <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`bestpomp-navbar-mobile-menu-button ${mobileMenuOpen ? 'change' : ''}`}>
        <div class='bar1'></div>
        <div class='bar2'></div>
        <div class='bar3'></div>
      </div>
      <div className='bestpomp-navbar-links-containers'>
        <Link to='/'>Home</Link>
        <Link to='/info'>Info</Link>
        <Link to='/uslugi'>Usługi</Link>
        <Link to='/projekty'>Projekty</Link>
        <Link to='/kontakt'>Kontakt</Link>
        <Link to='/faq'>FAQ</Link>
      </div>
    </div>
  );
};

export default NavBar;
