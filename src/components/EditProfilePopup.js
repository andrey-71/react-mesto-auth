import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  // Подписка на контекст данных пользователя
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <PopupWithForm
      name = "edit-profile"
      title = "Редактировать профиль"
      textButton = "Сохранить"
      isOpen = {props.isOpen}
      onPopupClick = {props.onPopupClick}
      onClose = {props.onClose}
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
  )
}

export default EditProfilePopup;