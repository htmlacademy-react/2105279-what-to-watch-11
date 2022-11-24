// Библиотеки
import { createReducer, configureStore } from '@reduxjs/toolkit';
import { selectGenre, getFilmList } from './action';

// Типы
// import { FilmData } from '../types/film';
// Константы
// Страницы
// Компоненты

const initialState = {
  genre: '1234',
  films: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectGenre,
      (state, action) => {
        console.log(action);
        return {
          ...state,
          genre: action.payload
        };
      });
});


// export const reducer = (state = initialState, action) => {
//   console.log(action);
//   return { ...state };

// };


export const store = configureStore({
  reducer: {
    film: reducer,
  },
});

export type StateType = ReturnType<typeof store.getState>;
