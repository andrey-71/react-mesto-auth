import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';


function App() {
  return (
    <div className="container">

      <Header />
      <Main />
      <Footer />

      {/* Popup edit user info */}
      <PopupWithForm
        name = "edit-profile"
        title = "Редактировать профиль"
        textButton = "Сохранить"
      >
        <>
          <label className="popup__input-element">
            <input
              type="text"
              placeholder="Ваше имя"
              className="popup__input popup__input_type_profile-name"
              id="input-profile-name"
              name="nameUser"
              required
              min={2}
              max={40}
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
              min={2}
              max={200}
            />
            <span
              className="popup__input-error"
              id="input-profile-job-error"
            ></span>
          </label>
        </>
        </PopupWithForm>

      {/* Popup edit user avatar */}
      <PopupWithForm
        name = "edit-avatar"
        title = "Обновить аватар"
        textButton = "Сохранить"
      >
        <>
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
        </>
      </PopupWithForm>

      {/* Popup add cards */}
      <PopupWithForm
        name = "add-card"
        title = "Новое место"
        textButton = "Создать"
      >
        <label className="popup__input-element">
          <input
            type="text"
            placeholder="Название"
            className="popup__input popup__input_type_card-name"
            id="input-card-name"
            name="name"
            required
            min={2}
            max={30}
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
      </PopupWithForm>

      {/* Popup delete card */}
      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <form
            className="popup__form popup__form_type_delete-card"
            name="addCards"
            noValidate
          >
            <button className="popup__submit-button" type="submit">Да</button>
          </form>
          <button
            className="popup__close"
            type="button"
          ></button>
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
