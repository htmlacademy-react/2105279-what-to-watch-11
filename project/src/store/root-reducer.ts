import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { filmsData } from './film-data/film-data';

export const rootReducer = combineReducers({
  [NameSpace.Data]: filmsData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
