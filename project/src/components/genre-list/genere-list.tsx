// Библиотеки
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import cn from 'classnames';

// Типы
import { Genre } from '../../types/film';

// Компоненты
// import CardList from '../../components/card-list/card-list';

export default function GenreList({ genre }: { genre: Genre }): JSX.Element {

  const genres = new Set<string>();
  for (const key in Genre) {
    genres.add(Genre[key]);
  }

  const genreList: JSX.Element[] = [];
  genres.forEach((value) => {
    const link = (
      <li className={cn(
        'catalog__genres-item',
        { 'catalog__genres-item--active': genre === value }

      )}
      >
        <a href="#" className="catalog__genres-link">{value}</a>
      </li >
    );
    genreList.push(link);
  });

  return (

    <ul className="catalog__genres-list">
      {genreList}
    </ul>

  );
}
