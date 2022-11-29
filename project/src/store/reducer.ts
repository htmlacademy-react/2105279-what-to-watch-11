// Библиотеки
import { createReducer } from '@reduxjs/toolkit';
import { selectGenre, getFilmList } from './action';

// Типы
import { FilmData, Genre } from '../types/film';

// Константы
import { films } from '../mocks/films';

type StateType = {
  genre: string;
  films: FilmData[];
}

const initialState: StateType = {
  genre: Genre.All,
  films: films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(
      selectGenre,
      (state, action) => ({
        ...state,
        genre: action.payload
      })
    );

  builder
    .addCase(
      getFilmList,
      (state) => ({
        ...state,
        films,
      })
    );
});

