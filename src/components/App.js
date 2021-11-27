import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';


function App() {
  // Переменная состояния пользователя
  const [currentUser, setCurrentUser] = React.useState(null);
  // Данные пользователя
  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(err => console.log(`При загрузке данных пользователя произошла ошибка: ${err}`));
  }, []);
  // Начальные состояния для закрытых попапов
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState( null);


  // Функции изменения состояния попапов для открытия
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }
  // Функция изменения состояния попапов для закрытия
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  // Закрытие попапа при нажатии Esc
  React.useEffect(() => {
    if (isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard) {
      const handleEscClick = (evt) => {
        if (evt.key === 'Escape') {
          closeAllPopups();
        }
      }
      document.addEventListener('keyup', handleEscClick);

      return () => {
        document.removeEventListener('keyup', handleEscClick);
      }
    }
  }, [isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, selectedCard]);

  // Закрытие попапа при клике на overlay
  const handleOverlayClick = (evt) => {
    if (evt.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="container">

        <Header />
        <Main
          onEditAvatar = {handleEditAvatarClick}
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onCardClick = {handleCardClick}
        />
        <Footer />

        {/* Popup edit user info */}
        <PopupWithForm
          name = "edit-profile"
          title = "Редактировать профиль"
          textButton = "Сохранить"
          isOpen = {isEditProfilePopupOpen}
          onPopupClick = {handleOverlayClick}
          onClose = {closeAllPopups}
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
          isOpen = {isEditAvatarPopupOpen}
          onPopupClick = {handleOverlayClick}
          onClose = {closeAllPopups}
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
          isOpen = {isAddPlacePopupOpen}
          onPopupClick = {handleOverlayClick}
          onClose = {closeAllPopups}
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
          onPopupClick = {handleOverlayClick}
        ></PopupWithForm>

        {/* Popup view card */}
        <ImagePopup
          card = {selectedCard}
          onPopupClick = {handleOverlayClick}
          onClose = {closeAllPopups}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
