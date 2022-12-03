// Библиотеки
import { createAction } from '@reduxjs/toolkit';

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
