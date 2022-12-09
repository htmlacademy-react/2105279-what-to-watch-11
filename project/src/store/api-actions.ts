//Библиотеки
import { createAsyncThunk } from '@reduxjs/toolkit';

// Типы
import { FilmData, CommentData } from '../types/film';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

//Константы
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';

//Модули
import { Axios } from '../services/api';
import { saveToken, dropToken } from '../services/token';
import { setError, loadFilmList, loadFilm, requireAuthorization, loadFilmComments } from './action';

export const fetchFilmAction = createAsyncThunk(
  'data/fetchFilms',
  async (_, { dispatch }) => {
    const { data } = await Axios.get<FilmData[]>('/films');
    dispatch(loadFilmList(data));
  },
);

export const fetchFilmIdAction = createAsyncThunk(
  'data/fetchFilm',
  async (filmId: number, { dispatch }) => {
    const { data } = await Axios.get<FilmData>(`/films/${filmId}`);
    dispatch(loadFilm(data));
  },
);

export const fetchFilmSimilarAction = createAsyncThunk(
  'data/fetchFilmSimilar',
  async (filmId: number, { dispatch }) => {
    const { data } = await Axios.get<FilmData[]>(`/films/${filmId}/similar`);
    dispatch(loadFilmList(data));
  },
);

export const fetchCommentAction = createAsyncThunk(
  'data/fetchComments',
  async (filmId: number, { dispatch }) => {
    const { data } = await Axios.get<CommentData[]>(`/comments/${filmId}`);
    dispatch(loadFilmComments(data));
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async (_, { dispatch }) => {
    try {
      await Axios.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData, { dispatch }) => {
    const { data: { token } } = await Axios.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async (_, { dispatch }) => {
    await Axios.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  (_, { dispatch }) => {
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
