// Библиотеки
import { createReducer } from '@reduxjs/toolkit';
import { selectGenre, getFilmList } from './action';

// Типы
import { FilmData, Genre } from '../types/film';

type StateType = {
  genre: string;
  films: FilmData[];
}

const initialState: StateType = {
  genre: Genre.All,
  films: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectGenre,
      (state, action) => ({
        ...state,
        genre: action.payload
      })
    );

  builder
    .addCase(getFilmList,
      (state, action) => {
        const films = action.payload.filter((film) => film.genre === state.genre || state.genre === Genre.All);
        return {
          ...state,
          films,
        };
      }
    );
});

