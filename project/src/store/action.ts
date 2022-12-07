// Библиотеки
import { createAction } from '@reduxjs/toolkit';

// Типы
import { FilmData } from '../types/film';

//Константы
import { AuthorizationStatus } from '../const';

export const selectGenre = createAction('data/genre',
  (value: string) => ({
    payload: value
  }
  ));

export const setViewCardCount = createAction('view/setCardCount',
  (count: number) => ({
    payload: count
  }
  ));

export const loadFilmList = createAction('data/loadFilms',
  (films: FilmData[]) => ({
    payload: films
  }
  ));

export const requireAuthorization = createAction('user/requireAuthorization',
  (status: AuthorizationStatus) => ({
    payload: status
  })
);

export const addViewCardCount = createAction('view/addCardCount');
export const setError = createAction<string | null>('data/setError');
