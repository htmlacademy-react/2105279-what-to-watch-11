// Библиотеки
import React from 'react';

// Типы
import { FilmData } from '../../types/film';

export default function TabOverview({ film }: { film: FilmData }): JSX.Element {
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>{film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film.starring}</strong></p>
      </div>
    </React.Fragment>
  );
}
