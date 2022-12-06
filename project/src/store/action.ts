// Библиотеки
import { createAction } from '@reduxjs/toolkit';

//Константы
import { AuthorizationStatus } from '../const';

export const selectGenre = createAction('data/genre',
  (value: string) => ({
    payload: value
  }
  ));

export const setViewCardCount = createAction('view/setCardCount',
  (count: number) => ({
    payload: count
  }
  ));

export const addViewCardCount = createAction('view/addCardCount');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
