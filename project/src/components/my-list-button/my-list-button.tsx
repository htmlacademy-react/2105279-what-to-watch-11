// Библиотеки
import React, { useEffect } from 'react';

//Хуки
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFilm, getFavorite } from '../../store/selectors';

//Типы
import { FavoriteStatus } from '../../types/film';

//Модули
import { fetchFavoriteAction, toggleFavoriteAction } from '../../store/api-actions';

export default function MyListButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const favorite = useAppSelector(getFavorite);

  useEffect(() => {
    dispatch(fetchFavoriteAction());
  }, [dispatch, film]);

  const handleAddFavoriteButtonClick = () => {
    dispatch(toggleFavoriteAction({ id: film.id, status: FavoriteStatus.AddFilm }));
  };

  const handleDeleteFavoriteButtonClick = () => {
    dispatch(toggleFavoriteAction({ id: film.id, status: FavoriteStatus.DeleteFilm }));
  };

  if (!film || !favorite) {
    return <div />;
  }

  return film.isFavorite
    ? (
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={handleDeleteFavoriteButtonClick}
      >
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        <span>My list</span>
        <span className="film-card__count">{favorite?.length}</span>
      </button>
    )
    : (
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={handleAddFavoriteButtonClick}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg >
        <span>My list</span>
        <span className="film-card__count">{favorite?.length}</span>
      </button >
    );
}
