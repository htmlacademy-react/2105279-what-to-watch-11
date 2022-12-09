// Библиотеки
import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Типы
import { Genre } from '../../types/film';
import { AppDispatch } from '../../types/store';

// Константы
import { ViewCardCount } from '../../const';

// Компоненты
import Tabs from '../../components/tabs/tabs';
import CardList from '../../components/card-list/card-list';
import PageHeader from '../../components/page-header/page-header';

//Модули
import { selectGenre, setViewCardCount } from '../../store/action';
import { StoreType } from '../../store/index';
import { fetchFilmSimilarAction } from '../../store/api-actions';

export default function Film(): JSX.Element {
  const { id } = useParams();
  const filmId = Number(id);
  const films = useSelector((state: StoreType) => state.film.films);
  const filmIndex = films.findIndex((value) => (value.id === filmId));
  if (filmIndex === -1) {
    redirect('not-found');
  }
  const film = films[filmIndex];
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(selectGenre(Genre[film.genre as keyof typeof Genre]));
    dispatch(setViewCardCount(ViewCardCount.Similar));
  }, [id, film.genre, dispatch]);

  useEffect(() => {
    dispatch(fetchFilmSimilarAction(film.id));
  }, [film.id, dispatch]);

  return (
    <React.StrictMode>
      <Helmet>
        <title>Подробнее о фильме</title>
      </Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`/films/${filmId}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <Tabs
              film={film}
            />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CardList />

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
    </React.StrictMode>
  );
}
