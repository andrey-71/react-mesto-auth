import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/header-logo.svg'



function Header(props) {

  return (
    <header className='header container__header'>
      <img
        className='header__logo'
        src={logo}
        alt='Логотип Место'
      />
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
    </header>
  )
}

export default Header;
