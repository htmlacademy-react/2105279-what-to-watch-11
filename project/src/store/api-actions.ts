import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Типы
import { StoreType, AppDispatch } from '../types/store';
import { FilmData } from '../types/film';

//Модули
import { loadFilmList } from './action';

export const fetchFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StoreType;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmData[]>('/films');
    dispatch(loadFilmList(data));
  },
);
