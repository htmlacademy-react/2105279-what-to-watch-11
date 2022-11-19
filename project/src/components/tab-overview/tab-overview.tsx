// Библиотеки
import React from 'react';

// Типы
import { FilmData } from '../../types/film';

export default function TabOverview({ film }: { film: FilmData }): JSX.Element {
  return (
    <React.StrictMode>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film?.description}</p>

        <p>Gustave prides himself on providing first-className service to the hotel&apos; s guests, including satisfying the sexual needs of the many elderly women who stay there.When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

        <p className="film-card__director"><strong>{film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring}</strong></p>
      </div>
    </React.StrictMode>
  );
}