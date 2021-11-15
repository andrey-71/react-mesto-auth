import React from 'react';

function PopupWithForm(props) {

  return(
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`popup__form popup__form_type_${props.name}`}
          name="addCards"
          noValidate
        >
          {props.children}
          <button className="popup__submit-button" type="submit">{props.textButton}</button>
        </form>
        <button
          className="popup__close"
          type="button"
        ></button>
      </div>
    </div>
  )
}

export default PopupWithForm;