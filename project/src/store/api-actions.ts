import { createAsyncThunk } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import { FilmData, CommentData, CommentRequest, FavoriteStatus } from '../types/film';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { AppRoute, APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { Axios } from '../services/api';
import { saveToken, dropToken } from '../services/token';
import { setError, loadFilmList, loadFilm, loadFilmComments, loadFavoriteList } from './film-data/film-data';
import { requireAuthorization } from './user-process/user-process';

export const fetchFilmAction = createAsyncThunk(
  'data/fetchFilms',
  async (_, { dispatch }) => {
    const { data } = await Axios.get<FilmData[]>('/films');
    dispatch(loadFilmList(data));
  },
);

export const fetchFavoriteAction = createAsyncThunk(
  'data/fetchFavorite',
  async (_, { dispatch }) => {
    const { data } = await Axios.get<FilmData[]>('/favorite');
    dispatch(loadFavoriteList(data));
  },
);

export const toggleFavoriteAction = createAsyncThunk(
  'data/fetchFavorite',
  async ({ id, status }: { id: number; status: FavoriteStatus }, { dispatch }) => {
    const { data } = await Axios.post<FilmData>(`/favorite/${id}/${status}`);
    dispatch(loadFilm(data));
  },
);

export const fetchFilmIdAction = createAsyncThunk(
  'data/fetchFilm',
  async ({ id, navigate }: { id: string; navigate: NavigateFunction }, { dispatch }) => {
    try {
      const { data } = await Axios.get<FilmData>(`/films/${id}`);
      dispatch(loadFilm(data));
    }
    catch {
      navigate(AppRoute.NotFound);
    }
  },
);

export const fetchFilmPromoAction = createAsyncThunk(
  'data/fetchFilm',
  async (_, { dispatch }) => {
    const { data } = await Axios.get<FilmData>('/promo');
    dispatch(loadFilm(data));
  },
);

export const fetchFilmSimilarAction = createAsyncThunk(
  'data/fetchFilmSimilar',
  async (id: string, { dispatch }) => {
    const { data } = await Axios.get<FilmData[]>(`/films/${id}/similar`);
    dispatch(loadFilmList(data));
  },
);

export const fetchCommentAction = createAsyncThunk(
  'data/fetchComments',
  async (id: string, { dispatch }) => {
    const { data } = await Axios.get<CommentData[]>(`/comments/${id}`);
    dispatch(loadFilmComments(data));
  },
);

export const uploadCommentAction = createAsyncThunk(
  'data/uploadComment',
  async ({ id, comment, navigate }: { id: string; comment: CommentRequest; navigate: NavigateFunction }, { dispatch }) => {
    const { data } = await Axios.post<CommentData[]>(`/comments/${id}`, comment);
    dispatch(loadFilmComments(data));
    navigate(`/films/${id}?tab=Reviews`);
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
