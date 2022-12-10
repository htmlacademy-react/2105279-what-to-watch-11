//Типы
import { FilmData, CommentData } from './film';
import { AuthorizationStatus } from '../const';

//Модули
import { store } from '../store/index';


export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type FilmsData = {
  genre: string;
  films: FilmData[];
  film: FilmData | null;
  comments: CommentData[];
  viewCardCount: number;
  // authorizationStatus: AuthorizationStatus;
  error: string | null;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};
