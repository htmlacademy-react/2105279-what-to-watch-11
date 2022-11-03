// Типы
import { FilmData } from '../../types/film';

type previewFilm = Pick<FilmData, 'name' | 'previewImage'> & { onCardMouseEnter: () => void };

export default function FilmCard(props: previewFilm): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => { props.onCardMouseEnter(); }}
    >
      <div className="small-film-card__image">
        <img src={props.previewImage} alt={props.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{props.name}</a>
      </h3>
    </article>
  );
}
