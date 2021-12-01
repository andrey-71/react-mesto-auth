import React from 'react';

function PopupWithForm(props) {


  return(
    <div className={`popup ${props.isOpen ? 'popup_active' : ''} popup_type_${props.name}`}
         onMouseDown={props.onPopupClick}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`popup__form popup__form_type_${props.name}`}
          name="form"
          onSubmit={props.onSubmit}
          noValidate
        >
          {props.children}
          <button className="popup__submit-button" type="submit">
            {props.onLoading ? 'Сохранение...' : props.textButton}
          </button>
        </form>
        <button
          className="popup__close"
          type="button"
          onClick = {props.onClose}
        />
      </div>
    </div>
  )
}

export default PopupWithForm;