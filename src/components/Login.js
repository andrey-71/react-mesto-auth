import React from 'react';
import auth from '../utils/auth';
import {useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // Стейт-переменные инпутов
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Обработчики изменения сотсояния инпутов
  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

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
          onChange={handleChangeEmail}
        />
        <input
          className='auth__input'
          name='passwordUser'
          type='text'
          placeholder='Пароль'
          required
          onChange={handleChangePassword}
        />
        <button className='auth__submit-button' type='submit'>Войти</button>
      </form>
      <div className='auth__sign-up'></div>

    </div>
  )
}

export default Login;