import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const handleEditAvatarClick = () => {
    document.querySelector('.popup_type_edit-avatar').classList.add('popup_active');
  }
  const handleEditProfileClick = () => {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_active');
  }
  const handleAddPlaceClick = () => {
    document.querySelector('.popup_type_add-card').classList.add('popup_active');
  }

  return (
    <div className="container">

      <Header />
      <Main
        onEditAvatar ={handleEditAvatarClick}
        onEditProfile ={handleEditProfileClick}
        onEditAvatar ={handleAddPlaceClick}
      />
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
      <PopupWithForm
        name = "delete-card"
        title = "Вы уверены?"
        textButton = "Да"
      ></PopupWithForm>

      <ImagePopup />

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
