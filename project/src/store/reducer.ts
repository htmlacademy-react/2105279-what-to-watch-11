// Библиотеки
import { createReducer } from '@reduxjs/toolkit';

// Типы
import { Genre } from '../types/film';
import { StateType } from '../types/store';

// Константы
import { ViewCardCount, AuthorizationStatus } from '../const';

//Модули
import { selectGenre, addViewCardCount, requireAuthorization, setViewCardCount, setError } from './action';
import { fetchFilmAction, checkAuthAction, loginAction, logoutAction } from './api-actions';

const initialState: StateType = {
  genre: Genre.All,
  films: [],
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
    .addCase(requireAuthorization,
      (state, action) => {
        state.authorizationStatus = action.payload;
      })
    .addCase(
      fetchFilmAction.fulfilled,
      (state, action) => {
        state.films = action.payload;
      })
    .addCase(
      checkAuthAction.fulfilled,
      (state, action) => {
        state.authorizationStatus = action.payload;
      })
    .addCase(
      loginAction.fulfilled,
      (state, action) => {
        state.authorizationStatus = action.payload;
      })
    .addCase(
      logoutAction.fulfilled,
      (state, action) => {
        state.authorizationStatus = action.payload;
      })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
