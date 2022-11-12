// Библиотеки
import React from 'react';
import { Link } from 'react-router-dom';

// Типы
import { FilmData } from '../../types/film';

type previewFilm = Pick<FilmData, 'id' | 'name' | 'previewImage'> & { onCardMouseEnter: () => void };

export default function FilmCard({ id, name, previewImage, onCardMouseEnter }: previewFilm): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => { onCardMouseEnter(); }}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}
