// Библиотеки
import React from 'react';

//Хуки
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFilms, getCardCount } from '../../store/selectors';

//Глобальное состояние
import { addViewCardCount } from '../../store/film-data';

export default function ShowButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const viewCardCount = useAppSelector(getCardCount);
  const films = useAppSelector(getFilms);

  return (
    <React.Component>
      {
        viewCardCount < films.length
          ? (
            <div className="catalog__more">
              <button
                className="catalog__button"
                type="button"
                onClick={
                  () => {
                    dispatch(addViewCardCount());
                  }
                }
              >
                Show more
              </button>
            </div>)
          : null
      }
    </React.Component>);
}
