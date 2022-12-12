// Библиотеки
import { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import cn from 'classnames';

//Хуки
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilms } from '../../store/selectors';

// Типы
import { FilmData } from '../../types/film';

//константы
import { GENRE_ALL } from '../../const';

//Модули
import { selectGenre, setViewCardCount } from '../../store/film-data';
import { ViewCardCount } from '../../const';

export default function GenreList(): JSX.Element {
  const [currentGenre, setCurrentGenre] = useState<string>(GENRE_ALL);
  const dispatch = useAppDispatch();

  const genreList: JSX.Element[] = [];

  const createGenreSet = (films: FilmData[]) => {
    const genres = new Set<string>();
    genres.add(GENRE_ALL);
    films.forEach(({ genre }) => {
      genres.add(genre);
    });
    return genres;
  };

  const films = useAppSelector(getFilms);
  const genres = useMemo(() => createGenreSet(films), [films]);

  useEffect(() => {
    dispatch(selectGenre(currentGenre));
    dispatch(setViewCardCount(ViewCardCount.Init));
  }, [currentGenre, dispatch]);

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
            setCurrentGenre(genre);
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
