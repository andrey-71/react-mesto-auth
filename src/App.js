import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header container__header">
        <img
          className="header__logo"
          src="{%=require('./images/header-logo.svg')%}"
          alt="Логотип Место"
        />
      </header>

      {/* Content */}
      <main className="content container__content">
        {/* Profile */}
        <section className="profile">
          <div className="profile__user-data">
            <button className="profile__edit-avatar" type="button">
              <img
                src="#"
                alt="Фотография пользователя"
                className="profile__avatar"
              />
            </button>
            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <p className="profile__job"></p>
              <button className="profile__edit-button" type="button"></button>
            </div>
          </div>
          <button className="profile__add-button" type="button"></button>
        </section>
        {/* Photo gallery */}
        <section className="card-gallery content__card-gallery"></section>
      </main>

      {/* Footer */}
      <footer className="footer container__footer">
        <h2 className="footer__copyright">&copy; 2021 Mesto Russia</h2>
      </footer>

      {/* Popup edit user info */}
      <div className="popup popup_type_edit-profile">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form popup__form_type_profile"
            name="editUserInfo"
          >
            <label className="popup__input-element">
              <input
                type="text"
                placeholder="Ваше имя"
                className="popup__input popup__input_type_profile-name"
                id="input-profile-name"
                name="nameUser"
                required
                minlength="2"
                maxlength="40"
              />
              <span
                className="popup__input-error"
                id="input-profile-name-error"
              ></span>
            </label>
            <label className="popup__input-element">
              <input
                type="text"
                placeholder="Чем занимаетесь"
                className="popup__input popup__input_type_profile-job"
                id="input-profile-job"
                name="infoUser"
                required
                minlength="2"
                maxlength="200"
              />
              <span
                className="popup__input-error"
                id="input-profile-job-error"
              ></span>
            </label>
            <button className="popup__submit-button" type="submit">Сохранить</button>
          </form>
          <button
            className="popup__close"
            type="button"
          ></button>
        </div>
      </div>

      {/* Popup edit user avatar */}
      <div className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            className="popup__form popup__form_type_edit-avatar"
            name="editAvatar"
          >
            <label className="popup__input-element">
              <input
                type="url"
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_type_avatar-link"
                id="input-avatar-link"
                name="avatarUser"
                required
              />
              <span className="popup__input-error" id="input-avatar-link-error"></span>
            </label>
            <button className="popup__submit-button" type="submit">Сохранить</button>
          </form>
          <button
            className="popup__close"
            type="button"
          ></button>
        </div>
      </div>

      {/* Popup add cards */}
      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form
            className="popup__form popup__form_type_card"
            name="addCards"
            novalidate
          >
            <label className="popup__input-element">
              <input
                type="text"
                placeholder="Название"
                className="popup__input popup__input_type_card-name"
                id="input-card-name"
                name="name"
                required
                minlength="2"
                maxlength="30"
              />
              <span className="popup__input-error" id="input-card-name-error"></span>
            </label>
            <label className="popup__input-element">
              <input
                type="url"
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_type_card-link"
                id="input-card-link"
                name="link"
                required
              />
              <span className="popup__input-error" id="input-card-link-error"></span>
            </label>
            <button className="popup__submit-button" type="submit">Создать</button>
          </form>
          <button
            className="popup__close"
            type="button"
          ></button>
        </div>
      </div>

      {/* Popup delete card */}
      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <form
            className="popup__form"
            name="addCards"
            novalidate
          >
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__submit-button" type="submit">Да</button>
            <button
              className="popup__close"
              type="button"
            ></button>
          </form>
        </div>
      </div>

      {/* Popup card view */}
      <div className="popup popup_type_card-view">
        <div className="popup__card-view-container">
          <img src="#" alt="#" className="popup__card-view-photo"/>
          <p className="popup__card-view-caption"></p>
          <button
            className="popup__close"
            type="button"
          ></button>
        </div>
      </div>


      {/* Template card */}
      <template id="card-template">
        <figure className="card">
          <img src="#" alt="#" className="card__image"/>
          <button className="card__delete" type="button"></button>
          <figcaption className="card__info">
            <h2 className="card__caption"></h2>
            <div className="card__like-section">
              <button className="card__like" type="button"></button>
              <p className="card__like-number"></p>
            </div>
          </figcaption>
        </figure>
      </template>
    </div>
  );
}

export default App;
