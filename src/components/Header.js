import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/header-logo.svg'



function Header() {
  return (
    <header className='header container__header'>
      <img
        className='header__logo'
        src={logo}
        alt='Логотип Место'
      />
      <div className='header__user-link-container'>
        <p className='header__email-user'>email@eamail.com</p>
        <Link to='/sign-in' className='header__link'>Войти</Link>
      </div>
    </header>
  )
}

export default Header;
