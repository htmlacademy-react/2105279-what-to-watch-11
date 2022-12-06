//Типы
import { FilmData } from './film';
import { AuthorizationStatus } from '../const';

//Модули
import { store } from '../store/index';

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type StateType = {
  genre: string;
  films: FilmData[];
  viewCardCount: number;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
}
