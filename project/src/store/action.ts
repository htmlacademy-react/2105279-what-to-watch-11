// Библиотеки
import { createAction } from '@reduxjs/toolkit';

// Типы
import { FilmData } from '../types/film';

export const selectGenre = createAction('SELECT_GENRE',
  (value: string) => ({
    payload: value
  }
  ));

export const getFilmList = createAction('GET_FILM_LIST',
  (films: FilmData[]) => ({
    payload: films
  }
  ));

export const setViewCardCount = createAction('SET_VIEW_CARD_COUNT',
  (count: number) => ({
    payload: count
  }
  ));

export const addViewCardCount = createAction('ADD_VIEW_CARD_COUNT');
