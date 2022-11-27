// Библиотеки
import { createAction } from '@reduxjs/toolkit';

// Константы
import { films } from '../mocks/films';

export const selectGenre = createAction('SELECT_GENRE',
  (value: string) => ({
    payload: value
  }
  ));

export const getFilmList = createAction('GET_FILM_LIST',
  () => ({
    payload: films
  }
  ));
