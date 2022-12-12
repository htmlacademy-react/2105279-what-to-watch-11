//Хуки
import { useAppSelector } from '../../hooks';
import { getCardCount, getGenre } from '../../store/selectors';

// Типы
import { FilmData } from '../../types/film';

//константы
import { GENRE_ALL } from '../../const';

// Компоненты
import FilmCard from '../../components/film-card/film-card';

export default function CardList({ films }: { films: FilmData[] }): JSX.Element {
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
