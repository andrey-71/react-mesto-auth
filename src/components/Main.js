import React from 'react';
import api from '../utils/api';

function Main(props) {

  const [userInfo, setUserInfo] = React.useState({});

  // Загрузка данных с сервера
  api.getAppInfo()
    .then(([getUserInfo, getInitialCards]) => {
      setUserInfo(getUserInfo);
      // userInfo.setUserAvatar(getUserInfo);

      // cardList.renderItems(getInitialCards);
    })
    .catch(err => console.log(`При загрузке данных с сервера произошла ошибка: ${err}`));

  return (
    <main className="content container__content">
      {/* Profile */}
      <section className="profile">
        <div className="profile__user-data">
          <button className="profile__edit-avatar" type="button" onClick ={props.onEditAvatar}>
            <img
              src={userInfo.avatar}
              alt="Фотография пользователя"
              className="profile__avatar"
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userInfo.name}</h1>
            <p className="profile__job">{userInfo.about}</p>
            <button className="profile__edit-button" type="button" onClick ={props.onEditProfile}></button>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick ={props.onAddPlace}></button>
      </section>
      {/* Photo gallery */}
      <section className="card-gallery content__card-gallery"></section>
    </main>
  )
}

export default Main;