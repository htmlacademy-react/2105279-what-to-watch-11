// Библиотеки
import { configureStore } from '@reduxjs/toolkit';

//Модули
import { reducer } from './reducer';
// import { createAPI } from '../services/api';

// export const api = createAPI();

export const store = configureStore({
  reducer: {
    film: reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: api,
  //     },
  //   }),
});

export type StoreType = ReturnType<typeof store.getState>;
