// Библиотеки
import React from 'react';

// Типы
import { FilmData } from '../../types/film';

const RatingStringToRange: {
  [key: string]: number[];
} = {
  'Bad': [0, 3],
  'Normal': [3, 5],
  'Good': [5, 8],
  'Very good': [8, 10],
  'Awesome': [10, 11]
};

const getRatingString = (rating: number) => {
  for (const key in RatingStringToRange) {
    const min = RatingStringToRange[key][0];
    const max = RatingStringToRange[key][1];
    if (rating >= min && rating < max) {
      return key;
    }
  }
};

export default function TabOverview({ film }: { film: FilmData }): JSX.Element {
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingString(film.rating)}</span>
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
