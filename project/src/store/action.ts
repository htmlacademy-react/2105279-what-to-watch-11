// Библиотеки
import { createAction } from '@reduxjs/toolkit';

// Типы
import { FilmData } from '../types/film';

export const selectGenre = createAction('data/genre',
  (value: string) => ({
    payload: value
  }
  ));

export const loadFilmList = createAction('data/fetchFilms',
  (films: FilmData[]) => ({
    payload: films
  }
  ));

export const setViewCardCount = createAction('view/setCardCount',
  (count: number) => ({
    payload: count
  }
  ));

export const addViewCardCount = createAction('view/addCardCount');
