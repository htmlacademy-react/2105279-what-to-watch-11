//Библиотеки
import { createAsyncThunk } from '@reduxjs/toolkit';

// Типы
import { FilmData } from '../types/film';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

//Константы
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';

//Модули
import { Axios } from '../services/api';
import { saveToken, dropToken } from '../services/token';
import { setError } from './action';
import { store } from '../store/index';

export const fetchFilmAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    const { data } = await Axios.get<FilmData[]>('/films');
    return data;
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await Axios.get(APIRoute.Login);
      return AuthorizationStatus.Auth;
    } catch {
      return AuthorizationStatus.NoAuth;
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    const { data: { token } } = await Axios.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    return AuthorizationStatus.Auth;
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    await Axios.delete(APIRoute.Logout);
    dropToken();
    return AuthorizationStatus.NoAuth;
  },
);

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
