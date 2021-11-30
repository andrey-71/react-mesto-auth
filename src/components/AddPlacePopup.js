import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  // Реф имени и ссылки новой карточки
  const newCardName = React.useRef('');
  const newCardLink = React.useRef('');

  // Обработчик формы
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({
      name: newCardName.current.value,
      link: newCardLink.current.value
    });
  }

  React.useEffect(() => {
    newCardName.current.value = '';
    newCardLink.current.value = '';
  }, [props.isOpen]);


  return (
    <PopupWithForm
      name = "add-card"
      title = "Новое место"
      textButton = "Создать"
      isOpen = {props.isOpen}
      onSubmit = {handleSubmit}
      onPopupClick = {props.onPopupClick}
      onClose = {props.onClose}
    >
      <label className="popup__input-element">
        <input
          type="text"
          placeholder="Название"
          className="popup__input popup__input_type_card-name"
          id="input-card-name"
          name="name"
          ref={newCardName}
          required
          min={2}
          max={30}
        />
        <span className="popup__input-error" id="input-card-name-error"/>
      </label>
      <label className="popup__input-element">
        <input
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_card-link"
          id="input-card-link"
          name="link"
          ref={newCardLink}
          required
        />
        <span className="popup__input-error" id="input-card-link-error"/>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;