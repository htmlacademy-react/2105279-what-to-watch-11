// Библиотеки
import { createReducer } from '@reduxjs/toolkit';

// Типы
import { FilmData, Genre } from '../types/film';

// Константы
import { ViewCardCount, AuthorizationStatus } from '../const';

//Модули
import { selectGenre, addViewCardCount, requireAuthorization, setViewCardCount } from './action';
import { fetchFilmAction } from './api-actions';

type StateType = {
  genre: string;
  films: FilmData[];
  viewCardCount: number;
  authorizationStatus: AuthorizationStatus;
}

const initialState: StateType = {
  genre: Genre.All,
  films: [],
  viewCardCount: ViewCardCount.Init,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(
      selectGenre,
      (state, action) => {
        state.genre = action.payload;
      })
    .addCase(
      fetchFilmAction.fulfilled,
      (state, action) => {
        state.films = action.payload;
      })
    .addCase(
      addViewCardCount,
      (state) => {
        state.viewCardCount = state.viewCardCount + ViewCardCount.Step;
      })
    .addCase(
      setViewCardCount,
      (state, action) => {
        state.viewCardCount = action.payload;
      })
    .addCase(requireAuthorization,
      (state, action) => {
        state.authorizationStatus = action.payload;
      });
});

