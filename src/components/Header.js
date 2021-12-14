import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/header-logo.svg'


function Header(props) {

  return (
    <header className='header container__header'>
      <div className='header__content'>
        <img
          className='header__logo'
          src={logo}
          alt='Логотип Место'
        />
        <input id='header__menu-toggle' className='header__menu-toggle' type='checkbox'/>
        <label className='header__menu' htmlFor='header__menu-toggle'>
          <span className='header__menu-item'></span>
        </label>
        <div className='header__user-link-container'>
          <p className='header__email-user'>{props.emailUser}</p>
          <Link
            to={props.link}
            className='header__link'
            onClick={props.onSignOut}
          >
            {props.textAuth}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
