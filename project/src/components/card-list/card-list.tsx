// Библиотеки
import { useSelector } from 'react-redux';

// Типы
import { FilmData } from '../../types/film';
import { StoreType } from '../../types/store';

// Компоненты
import FilmCard from '../../components/film-card/film-card';

export default function CardList(): JSX.Element {
  const films = useSelector((state: StoreType) => state.film.films);
  const viewCardCount = useSelector((state: StoreType) => state.film.viewCardCount);

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
