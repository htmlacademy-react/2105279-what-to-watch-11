// Библиотеки
import { configureStore } from '@reduxjs/toolkit';

//Модули
import { rootReducer } from './root-reducer';

export const store = configureStore({
  reducer: rootReducer
});
