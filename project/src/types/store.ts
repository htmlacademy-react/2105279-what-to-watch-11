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
  favorite: FilmData[];
  film: FilmData | null;
  comments: CommentData[];
  viewCardCount: number;
  error: string | null;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};
