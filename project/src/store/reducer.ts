// Библиотеки
import { createReducer } from '@reduxjs/toolkit';

// Типы
import { FilmData, Genre } from '../types/film';

// Константы
import { ViewCardCount } from '../const';

//Модули
import { selectGenre, addViewCardCount, setViewCardCount } from './action';
import { fetchFilmAction } from './api-actions';

type StateType = {
  genre: string;
  films: FilmData[];
  viewCardCount: number;
}

const initialState: StateType = {
  genre: Genre.All,
  films: [],
  viewCardCount: ViewCardCount.Init,
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
      fetchFilmAction.fulfilled,
      (state, action) => ({
        ...state,
        films: action.payload
      })
    );

  builder
    .addCase(
      addViewCardCount,
      (state) => ({
        ...state,
        viewCardCount: state.viewCardCount + ViewCardCount.Step
      })
    );

  builder
    .addCase(
      setViewCardCount,
      (state, action) => ({
        ...state,
        viewCardCount: action.payload
      })
    );
});

