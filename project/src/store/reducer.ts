// Библиотеки
import { createReducer } from '@reduxjs/toolkit';
import { selectGenre, getFilmList } from './action';

// Типы
import { FilmData } from '../types/film';

type StateType = {
  genre: string;
  films: FilmData[];
}

const initialState: StateType = {
  genre: '',
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
      (state, action) => ({
        ...state,
        films: action.payload
      })
    );
});

