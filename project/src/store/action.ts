// Библиотеки
import { createAction } from '@reduxjs/toolkit';

// Типы
import { FilmData } from '../types/film';

// Константы
// import { films } from '../mocks/films';

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
