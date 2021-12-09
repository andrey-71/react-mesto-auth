import React from 'react';

function Login() {



  return (
    <div className='auth auth_type_login container__auth'>
      <h2 className='auth__title'>Вход</h2>
      <form className='auth__form auth__form_type_login'>
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
        <button className='auth__submit-button' type='submit'>Войти</button>
      </form>

    </div>
  )
}

export default Login;