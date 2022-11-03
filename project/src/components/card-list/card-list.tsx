// Типы
import { FilmData, MainProps } from '../../types/film';

// Компоненты
import FilmCard from '../../components/film-card/film-card';


export default function CardList(props: MainProps): JSX.Element {
  return (
    <div className="catalog__films-list">

      {
        props.films
          .map((film: FilmData) => (
            < FilmCard
              key={film.id}
              name={film.name}
              previewImage={film.previewImage}
            />
          ))
      }

    </div>
  );
}
