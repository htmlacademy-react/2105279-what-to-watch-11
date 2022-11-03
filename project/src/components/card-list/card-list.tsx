
// Библиотеки
import React from 'react';

// Типы
import { FilmData, MainProps } from '../../types/film';

// Компоненты
import FilmCard from '../../components/film-card/film-card';


export default function CardList(props: MainProps): JSX.Element {

  const setId = React.useState(0)[1];

  return (
    <div className="catalog__films-list">

      {
        props.films
          .map((film: FilmData) => (
            < FilmCard
              key={film.id}
              name={film.name}
              previewImage={film.previewImage}
              onCardMouseEnter={() => setId(film.id)}
            />
          ))
      }

    </div>
  );
}
