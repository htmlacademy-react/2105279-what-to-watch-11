//Хуки
import { useAppSelector } from '../../hooks';
import { getFilms, getCardCount, getGenre } from '../../store/selectors';

// Типы
import { FilmData, GENRE_ALL } from '../../types/film';

// Компоненты
import FilmCard from '../../components/film-card/film-card';

export default function CardList(): JSX.Element {
  const films = useAppSelector(getFilms);
  const viewCardCount = useAppSelector(getCardCount);
  const genre = useAppSelector(getGenre);

  const filtredFilms = films.filter((film) => {
    if (genre === GENRE_ALL || genre === film.genre) {
      return true;
    }

    return false;
  });

  return (
    <div className="catalog__films-list">
      {
        filtredFilms
          .slice(0, viewCardCount)
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
