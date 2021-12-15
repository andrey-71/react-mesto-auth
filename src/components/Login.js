import React from 'react';
import auth from '../utils/auth';
import {useNavigate} from 'react-router-dom';

function Login(props) {
  const navigate = useNavigate();

  // Стейт-переменные инпутов
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Обработчики изменения состояния инпутов
  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  // Авторизация пользователя
  function onLogin() {
    auth.authorize({email, password})
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          props.onLogin();
          props.onEmailUser(email);
          navigate('/');
        }
      })
      .catch(err => console.log(`При авторизации произошла ошибка: ${err}`));
  }

  // Обработчик формы
  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin();
  }

  return (
    <div className='auth auth_type_login container__auth'>
      <h2 className='auth__title'>Вход</h2>
      <form
        className='auth__form auth__form_type_login'
        onSubmit={handleSubmit}
      >
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
          type='password'
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