import React from 'react';

function Login(props) {
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
    props.onLogin({email, password});
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
        <button className='auth__submit-button' type='submit'>Войти</button>
      </form>
      <div className='auth__sign-up'></div>

    </div>
  )
}

export default Login;