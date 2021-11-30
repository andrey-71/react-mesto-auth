import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import DeleteCardPopup from "./DeleteCardPopup";



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
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState( null);

  // Получение карточек и данных пользователя, отрисовка на странице
  React.useEffect(() => {
    api.getAppInfo()
      .then(([getUserInfo, getInitialCards]) => {
        setCurrentUser(getUserInfo);
        setCards(getInitialCards);
      })
      .catch(err => console.log(`При загрузке данных с сервера произошла ошибка: ${err}`));
  }, [])


  // Открытие попапов
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }
  const handleCardDeleteClick = (card) => {
    setIsDeleteCardPopupOpen(card);
  }
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  // Закрытие попапов
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(null);
  }
  // Закрытие попапа при нажатии Esc
  React.useEffect(() => {
    if (isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || isDeleteCardPopupOpen || selectedCard) {
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
  }, [isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, isDeleteCardPopupOpen, selectedCard]);
  // Закрытие попапа при клике на overlay
  const handleOverlayClick = (evt) => {
    if (evt.target.classList.contains('popup')) {
      closeAllPopups();
    }
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
  // - данных новой карточки
  function handleAddPlaceSubmit(newCard) {
    api.setNewCard(newCard)
      .then((res) => {
        if(cards) {
          setCards([res, ...cards]);
          closeAllPopups();
        }
    })
      .catch(err => console.log(`При отправке данных новой карточки произошла ошибка: ${err}`));
  }
  // - запроса на удаление карточки
  function handleDeleteCardSubmit(card) {
    api.deleteCard(card)
      .then(() => {
        setCards((cards) => cards.filter((item) => item._id !== card._id));
        closeAllPopups();
      })
      .catch(err => console.log(`При удалении карточки произошла ошибка: ${err}`));
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


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="container">

        <Header />
        <Main
          onEditAvatar = {handleEditAvatarClick}
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onCardClick = {handleCardClick}
          onCardLike = {handleCardLike}
          onCardDelete = {handleCardDeleteClick}
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
        <AddPlacePopup
          isOpen = {isAddPlacePopupOpen}
          onAddPlace = {handleAddPlaceSubmit}
          onPopupClick = {handleOverlayClick}
          onClose = {closeAllPopups}
        />

        {/* Popup delete card */}
        <DeleteCardPopup
          isOpen = {isDeleteCardPopupOpen}
          onDeleteCard = {handleDeleteCardSubmit}
          onPopupClick = {handleOverlayClick}
          onClose = {closeAllPopups}
        />

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
