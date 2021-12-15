import React from 'react';
import {Link} from 'react-router-dom';


function Register(props) {
  // Стейты инпутов
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Обработчики изменения состояния инпутов
  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  // Обработчик формы
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister({email, password});
  }


  return (
    <div className='auth auth_type_registr container__auth'>
      <h2 className='auth__title'>Регистрация</h2>
      <form
        className='auth__form auth__form_type_registr'
        onSubmit={handleSubmit}
      >
        <input
          className='auth__input'
          name='emailUser'
          type='email'
          placeholder='Email'
          required
          onChange={handleChangeEmail}
          value={email}
        />
        <input
          className='auth__input'
          name='passwordUser'
          type='password'
          placeholder='Пароль'
          required
          onChange={handleChangePassword}
          value={password}
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