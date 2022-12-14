//Глобальное состояние
import { store } from '../store';
import { setError } from '../store/film-data/film-data';
import { clearErrorAction } from '../store/api-actions';

export const processErrorHandle = (message: string) => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
