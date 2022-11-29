// Библиотеки
import { createReducer } from '@reduxjs/toolkit';
import { selectGenre, getFilmList } from './action';

// Типы
import { FilmData, Genre } from '../types/film';

type StateType = {
  genre: string;
  films: FilmData[];
}

const initialState: StateType = {
  genre: Genre.All,
  films: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectGenre,
      (state, action) => ({
        ...state,
        genre: action.payload
      })
    );

  builder
    .addCase(getFilmList,
      (state, action) => {
        const films = action.payload.filter((film) => {
          if (state.genre === Genre.All) {
            return true;
          }
          for (const key in Genre) {
            if (film.genre === key && state.genre === Genre[key]) {
              return true;
            }
          }
          return false;
        });

        return {
          ...state,
          films,
        };
      }
    );
});

