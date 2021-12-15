import React from 'react';
import auth from '../utils/auth';
import {Link, useNavigate} from 'react-router-dom';
import InfoTooltip from './InfoTooltip';


function Register(props) {
  const navigate = useNavigate();

  // Стейт-переменные
  // - инпутов
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // - регистрации
  const [isRegistered, setIsRegistered] = React.useState(false);

  // Обработчики изменения состояния инпутов
  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  // Регистрация пользователя
  function onRegister() {
    auth.register({email, password})
      .then(() => {
        setIsRegistered(true);
        props.onInfoTooltip();
        setTimeout(() => {
          navigate('/sign-in');
        }, 2000)
      })
      .catch((err) => {
        setIsRegistered(false);
        props.onInfoTooltip();
        console.log(`При регистрации произошла ошибка: ${err}`);
      })
  }

  // Обработчик формы
  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister();
  }


  return (
    <>
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
          />
          <input
            className='auth__input'
            name='passwordUser'
            type='password'
            placeholder='Пароль'
            required
            onChange={handleChangePassword}
          />
          <button className='auth__submit-button' type='submit'>Зарегистрироваться</button>
        </form>
        <div className='auth__sign-in'>
          <p className='auth__registration-request-text'>Уже зарегистрированы?</p>
          <Link to='/sign-in' className='auth__login-link'>Войти</Link>
        </div>
      </div>
      <InfoTooltip
        isOpen={props.isOpen}
        onClose={props.onClose}
        onPopupClick={props.onPopupClick}
        status={isRegistered}
      />
    </>
  )
}

export default Register;