import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {


  return (
    <PopupWithForm
      name = "edit-avatar"
      title = "Обновить аватар"
      textButton = "Сохранить"
      isOpen = {props.isOpen}
      onPopupClick = {props.onPopupClick}
      onClose = {props.onClose}
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
  )
}

export default EditAvatarPopup;