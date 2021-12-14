import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/header-logo.svg'


function Header(props) {

  return (
    <header className='header container__header'>

      {props.isLogged ?
        <div className='header__content'>
          <input id='header__menu-toggle' className='header__menu-toggle' type='checkbox'/>
          <div className='header__logo-container'>
            <img
              className='header__logo'
              src={logo}
              alt='Логотип Место'
            />
            <label className='header__menu' htmlFor='header__menu-toggle'>*/}
              <span className='header__menu-item'></span>
            </label>
          </div>
          <div className='header__user'>
            <p className='header__user-email'>{props.emailUser}</p>
              <Link
                to={props.link}
                className='header__user-signout'
                onClick={props.onSignOut}
              >
                {props.textAuth}
              </Link>
          </div>
        </div>
        :
        <div className='header__content'>
          <div>
            <img
              className='header__logo'
              src={logo}
              alt='Логотип Место'
            />
            <Link
              to={props.link}
              className='header__link'
              onClick={props.onSignOut}
            >
              {props.textAuth}
            </Link>
          </div>
        </div>
      }

    </header>
  )
}

export default Header;
