// Типы
import { FilmData, MainProps } from '../../types/film';

// Компоненты
import FilmCard from '../../components/film-card/film-card';


export default function SimilarCardList({ films, genre }: MainProps & { genre: string }): JSX.Element {
  const similarFilm = films.filter((film: FilmData) => film.genre === genre).slice(0, 3);


  return (
    <div className="catalog__films-list">
      {
        similarFilm
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
