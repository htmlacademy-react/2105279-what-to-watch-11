// Библиотеки
import { createReducer } from '@reduxjs/toolkit';

// Типы
import { Genre } from '../types/film';
import { StateType } from '../types/store';

// Константы
import { ViewCardCount, AuthorizationStatus } from '../const';

//Модули
import {
  selectGenre,
  addViewCardCount,
  requireAuthorization,
  setViewCardCount,
  setError,
  loadFilmList,
  loadFilm,
  loadFilmComments
} from './action';

const initialState: StateType = {
  genre: Genre.All,
  films: [],
  film: null,
  comments: [],
  viewCardCount: ViewCardCount.Init,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(
      selectGenre,
      (state, action) => {
        state.genre = action.payload;
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
    .addCase(
      requireAuthorization,
      (state, action) => {
        state.authorizationStatus = action.payload;
      })
    .addCase(
      loadFilmList,
      (state, action) => {
        state.films = action.payload;
      })
    .addCase(
      loadFilm,
      (state, action) => {
        state.film = action.payload;
      })
    .addCase(
      loadFilmComments,
      (state, action) => {
        state.comments = action.payload;
      })
    .addCase(setError,
      (state, action) => {
        state.error = action.payload;
      });
});
