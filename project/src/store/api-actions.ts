import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Типы
import { StoreType, AppDispatch } from '../types/store';
import { FilmData } from '../types/film';
// import { loadQuestions, requireAuthorization } from './action';

//Модули
import { getFilmList } from './action';

export const fetchQuestionAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StoreType;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmData[]>('/films');
    dispatch(getFilmList(data));
  },
);
