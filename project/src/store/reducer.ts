// Библиотеки
import { createReducer } from '@reduxjs/toolkit';
import { action } from './action';

// Типы
// import { FilmData } from '../types/film';
// Константы
// Страницы
// Компоненты

const initialState = {
  genre: '',
  films: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(action, (state) => state);
});
