import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';


function App() {
  //Стейт-переменные:
  // - данных пользователя
  const [currentUser, setCurrentUser] = React.useState(false);
  // - карточек
  const [cards, setCards] = React.useState([]);
  // - попапов
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState( null);

  // Получение данных пользователя и отрисовка на странице
  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(err => console.log(`При загрузке данных пользователя произошла ошибка: ${err}`));
  }, []);

  // Получение данных карточек и отрисовка  на странице
  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch(err => console.log(`При загрузке карточек произошла ошибка: ${err}`));
  }, []);


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

  // Лайк на карточке
  function handleCardLike(card) {
    const isLiked = card.likes.some(c => c._id === currentUser._id);

    api.changeLikeCardStatus(card, !isLiked)
      .then((newCard) => {
        setCards((cards) => cards.map((item) => item._id === card._id ? newCard : item));
      })
      .catch(err => console.log(`При постановке/снятии лайк произошла ошибка: ${err}`));
  }

  // Удаление карточки
  function handleCardDelete(card) {
    api.deleteCard(card)
      .then(() => {
        setCards((cards) => cards.filter((item) => item._id !== card._id));
      })
      .catch(err => console.log(`При удалении карточки произошла ошибка: ${err}`));
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
          onCardLikeClick = {handleCardLike}
          onCardDelete = {handleCardDelete}
          cards = {cards}
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
