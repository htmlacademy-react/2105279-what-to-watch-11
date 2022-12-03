// import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Типы
import { FilmData } from '../types/film';

//Модули
import { Axios } from '../services/api';

export const fetchFilmAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    const { data } = await Axios.get<FilmData[]>('/films');
    return data;
  },
);
