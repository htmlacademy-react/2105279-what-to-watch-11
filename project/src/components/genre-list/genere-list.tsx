// Библиотеки
import { SyntheticEvent, useState } from 'react';
import cn from 'classnames';

//Хуки
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilms } from '../../store/selectors';

// Типы
import { GENRE_ALL } from '../../types/film';

//Модули
import { selectGenre, setViewCardCount } from '../../store/action';
import { ViewCardCount } from '../../const';

export default function GenreList(): JSX.Element {
  const [currentGenre, setCurrentGenre] = useState<string>(GENRE_ALL);
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFilms);

  const genreList: JSX.Element[] = [];
  const genres = new Set<string>();

  genres.add(GENRE_ALL);
  films.forEach(({ genre }) => {
    genres.add(genre);
  });

  genres.forEach((genre) => {
    genreList.push(
      <li
        key={genre}
        className={cn(
          'catalog__genres-item',
          { 'catalog__genres-item--active': currentGenre === genre }
        )}
      >
        <a
          href="/"
          className="catalog__genres-link"
          onClick={(evt: SyntheticEvent) => {
            evt.preventDefault();
            if (genre !== currentGenre) {
              setCurrentGenre(genre);
              dispatch(selectGenre(genre));
              dispatch(setViewCardCount(ViewCardCount.Init));
            }
          }}
        >
          {genre}
        </a>
      </li >
    );
  });

  return (
    <ul className="catalog__genres-list">
      {genreList}
    </ul>
  );
}
