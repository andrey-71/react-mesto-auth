import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


function Register() {
  const navigate = useNavigate();

  return (
    <div className='auth auth_type_registr container__auth'>
      <h2 className='auth__title'>Регистрация</h2>
      <form className='auth__form auth__form_type_registr'>
        <input
          className='auth__input'
          name='emailUser'
          type='email'
          placeholder='Email'
          required
        />
        <input
          className='auth__input'
          name='passwordUser'
          type='text'
          placeholder='Пароль'
          required
        />
        <button className='auth__submit-button' type='submit'>Зарегистрироваться</button>
      </form>
      <div className='auth__sign-in'>
        <p className='auth__registration-request-text'>Уже зарегистрированы?</p>
        <Link to='/sign-in' className='auth__login-link'>Войти</Link>
      </div>

    </div>
  )
}

export default Register;