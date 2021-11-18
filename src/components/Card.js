import React from 'react';

function Card(props) {
  return (
    <figure className="card">
      <img src={props.link} alt={props.name} className="card__image"/>
      <button className="card__delete" type="button"></button>
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