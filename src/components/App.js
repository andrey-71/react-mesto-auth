import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from './ImagePopup';
import api from '../utils/api';



function App() {
  // Стейт-переменные:
  // - данных пользователя
  const [currentUser, setCurrentUser] = React.useState({});
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

  // Отправка на сервер
  // - данных пользователя
  function handleUpdateUser(userData) {
    api.setUserInfo(userData)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(`При отправке данных пользователя произошла ошибка: ${err}`));
  }
  // - аватара пользователя
  function handleUpdateAvatar(userData) {
    api.setUserAvatar(userData)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
        .catch(err => console.log(`При изменении аватара произошла ошибка: ${err}`));
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
        <EditProfilePopup
          isOpen = {isEditProfilePopupOpen}
          onUpdateUser = {handleUpdateUser}
          onPopupClick = {handleOverlayClick}
          onClose = {closeAllPopups}
        />

        {/* Popup edit user avatar */}
        <EditAvatarPopup
          isOpen = {isEditAvatarPopupOpen}
          onUpdateAvatar = {handleUpdateAvatar}
          onPopupClick = {handleOverlayClick}
          onClose = {closeAllPopups}
        />


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
