// Библиотеки
import { SyntheticEvent, useState } from 'react';
import cn from 'classnames';

//Хуки
import { useAppDispatch } from '../../hooks';

// Типы
import { Genre } from '../../types/film';

//Модули
import { selectGenre } from '../../store/action';

export default function GenreList(): JSX.Element {
  const [currentGenre, setCurrentGenre] = useState(Genre.All);
  const dispatch = useAppDispatch();

  const genreList: JSX.Element[] = [];
  const genres = new Set<string>();

  for (const key in Genre) {
    const genre = Genre[key as keyof typeof Genre];
    if (!genres.has(genre)) {
      genres.add(genre);
      genreList.push(
        <li
          key={key}
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
              dispatch(selectGenre(genre));
            }}
          >
            {genre}
          </a>
        </li >
      );
    }
  }

  return (
    <ul className="catalog__genres-list">
      {genreList}
    </ul>
  );
}
