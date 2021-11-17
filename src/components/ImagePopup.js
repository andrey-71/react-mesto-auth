import React from 'react';

function ImagePopup() {
  return(
    <div className="popup popup_type_card-view">
      <div className="popup__card-view-container">
        <img src="#" alt="#" className="popup__card-view-photo"/>
        <p className="popup__card-view-caption"></p>
        <button
          className="popup__close"
          type="button"
        ></button>
      </div>
    </div>
  )
}

export default ImagePopup;