import React from 'react';


function Main() {

  const handleEditAvatarClick = () => {
    document.querySelector('.popup_type_edit-avatar').classList.add('popup_active');
  }
  const handleEditProfileClick = () => {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_active');
  }
  const handleAddPlaceClick = () => {
    document.querySelector('.popup_type_add-card').classList.add('popup_active');
  }

  return (
    <main className="content container__content">
      {/* Profile */}
      <section className="profile">
        <div className="profile__user-data">
          <button className="profile__edit-avatar" type="button" onClick ={handleEditAvatarClick}>
            <img
              src="#"
              alt="Фотография пользователя"
              className="profile__avatar"
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <p className="profile__job"></p>
            <button className="profile__edit-button" type="button" onClick ={handleEditProfileClick}></button>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick ={handleAddPlaceClick}></button>
      </section>
      {/* Photo gallery */}
      <section className="card-gallery content__card-gallery"></section>
    </main>
  )
}

export default Main;