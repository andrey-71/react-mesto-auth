import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {
  // Подписка на контекст данных пользователя
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <figure className="card">
      <img
        src={props.link}
        alt={props.name}
        className="card__image"
        onClick={
          function handleClick() {
            props.onCardClick(props.card)
          }
        }
      />
      <button className='card__delete-button' type="button"></button>
      <figcaption className="card__info">
        <h2 className="card__caption">{props.name}</h2>
        <div className="card__like-section">
          <button className="card__like" type="button"></button>
          <p className="card__like-number">{props.likes}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card