// import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Типы
import { FilmData } from '../types/film';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

//Константы
import { APIRoute, AuthorizationStatus } from '../const';

//Модули
import { Axios } from '../services/api';

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
  async () => {
    const { data: { token } } = await Axios.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    await Axios.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);


