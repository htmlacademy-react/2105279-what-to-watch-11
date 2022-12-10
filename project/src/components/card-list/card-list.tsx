//Хуки
import { useAppSelector } from '../../hooks';
import { getFilms, getCardCount } from '../../store/selectors';

// Типы
import { FilmData } from '../../types/film';

// Компоненты
import FilmCard from '../../components/film-card/film-card';

export default function CardList(): JSX.Element {
  const films = useAppSelector(getFilms);
  const viewCardCount = useAppSelector(getCardCount);

  return (
    <div className="catalog__films-list">
      {
        films
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
