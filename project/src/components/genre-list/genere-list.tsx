// Библиотеки
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// Типы
import { MainProps, Genre } from '../../types/film';

// Компоненты
import CardList from '../../components/card-list/card-list';

export default function GenreList({ films }: MainProps): JSX.Element {

  const genreList = [];
  for (const genre in Genre) {
    const link = (
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>
    );
    genreList.push(link);
  }

  return (

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          {genreList}
        </ul>

        <CardList films={films} />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    </div>
  );
}
