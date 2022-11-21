// Типы
import { FilmData, MainProps } from '../../types/film';

// Компоненты
import FilmCard from '../../components/film-card/film-card';


export default function CardList({ films }: MainProps): JSX.Element {

  return (
    <div className="catalog__films-list">

      {
        films
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
