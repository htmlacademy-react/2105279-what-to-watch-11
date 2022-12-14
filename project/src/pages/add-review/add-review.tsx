// Библиотеки
import { Helmet } from 'react-helmet-async';
import { useParams, Link, redirect } from 'react-router-dom';

//Хуки
import { useAppSelector } from '../../hooks';

// Компоненты
import FormReview from '../../components/form-review/form-review';

//Глобальное состояние
import { getFilms } from '../../store/selectors';

export default function AddReview(): JSX.Element {
  const { id } = useParams();
  const filmId = Number(id);
  const films = useAppSelector(getFilms);
  const filmIndex = films.findIndex((value) => (value.id === filmId));
  if (filmIndex === -1 || !id) {
    redirect('not-found');
  }
  const film = films[filmIndex];

  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Добавление в просмотр</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmId}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to="#" className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <FormReview id={id as string} />
      </div>

    </section>
  );
}
