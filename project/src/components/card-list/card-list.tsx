// Библиотеки
import { useSelector } from 'react-redux';

// Типы
import { FilmData, MainProps, Genre } from '../../types/film';

// Компоненты
import FilmCard from '../../components/film-card/film-card';

//Модули
import { StoreType } from '../../store/index';

export default function CardList({ films }: MainProps): JSX.Element {
  const genre = useSelector((state: StoreType) => state.film.genre);

  const filtredFilms = films.filter((film) => {
    if (genre === Genre.All) {
      return true;
    }
    for (const key in Genre) {
      if (film.genre === key && genre === Genre[key as keyof typeof Genre]) {
        return true;
      }
    }
    return false;
  });

  return (
    <div className="catalog__films-list">
      {
        filtredFilms
          .map((film: FilmData) => (
            < FilmCard
              key={film.id}
              id={film.id}
              name={film.name}
              previewImage={film.previewImage}
              previewVideoLink={film.previewVideoLink}
            />
          ))
      }
    </div>
  );
}
