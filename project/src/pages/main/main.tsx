import React, { useEffect, MouseEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { ViewCardCount, GENRE_ALL } from '../../const';
import CardList from '../../components/card-list/card-list';
import GenreList from '../../components/genre-list/genere-list';
import ShowButton from '../../components/show-button/show-button';
import PageHeader from '../../components/page-header/page-header';
import LoadingScreen from '../loading-screen/loading-screen';
import MyListButton from '../../components/my-list-button/my-list-button';
import { selectGenre, setViewCardCount } from '../../store/film-data/film-data';
import { fetchFilmPromoAction } from '../../store/api-actions';
import { getFilm, getFilms } from '../../store/selectors';

export default function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  const films = useAppSelector(getFilms);

  useEffect(() => {
    dispatch(selectGenre(GENRE_ALL));
    dispatch(setViewCardCount(ViewCardCount.Init));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFilmPromoAction());
  }, [dispatch]);

  if (!film) {
    return <LoadingScreen />;
  }

  const handlePayerButtonClick = (evt: MouseEvent) => {
    evt.preventDefault();
    navigate(`/player/${film.id}`);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader favorite={null} />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={handlePayerButtonClick}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <MyListButton />

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />

          <CardList films={films} />

          <ShowButton />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
