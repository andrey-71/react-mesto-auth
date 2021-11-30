import React from 'react';
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup(props) {


  return (
    <PopupWithForm
      isOpen = {props.isOpen}
      name ={props.name}
      title ={props.title}
      textButton ={props.textButton}
      onPopupClick = {props.onPopupClick}
      onClose = {props.onClose}
    />
  )
}

export default DeleteCardPopup;