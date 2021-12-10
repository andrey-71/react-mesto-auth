import React from 'react';
import auth from '../utils/auth';
import {Link, useNavigate} from 'react-router-dom';


function Register() {
  const navigate = useNavigate();

  // Стейт-переменные инпутов
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Обработчик изменения сотсояния инпутов
  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  // Обработчик формы





  // React.useEffect(() => {
  //   auth.register({
  //     email: 'email@yandex.ru',
  //     password: 'somepassword'
  //   })
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch(err => console.log(`При регистрации произошла ошибка: ${err}`));
  //     // .catch(err => console.log(`Reject: ${err.error}`));
  // }, [])

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