// Библиотеки
import React from 'react';
import { Link } from 'react-router-dom';

// Типы
import { FilmData } from '../../types/film';

type previewFilm = Pick<FilmData, 'id' | 'name' | 'previewImage'> & { onCardMouseEnter: () => void };

export default function FilmCard(props: previewFilm): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => { props.onCardMouseEnter(); }}
    >
      <div className="small-film-card__image">
        <img src={props.previewImage} alt={props.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${props.id}`} className="small-film-card__link">{props.name}</Link>
      </h3>
    </article>
  );
}
