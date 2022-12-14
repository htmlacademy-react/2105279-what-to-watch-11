//Типы
import { StoreType } from '../types/store';
import { FilmData, CommentData } from '../types/film';

//Константы
import { AuthorizationStatus } from '../const';

export const getFilms = (state: StoreType): FilmData[] => state.Data.films;
export const getFavorite = (state: StoreType): FilmData[] => state.Data.favorite;
export const getFilm = (state: StoreType): FilmData => state.Data.film as FilmData;
export const getComments = (state: StoreType): CommentData[] => state.Data.comments;
export const getAuthorizationStatus = (state: StoreType): AuthorizationStatus => state.User.authorizationStatus;
export const getCardCount = (state: StoreType): number => state.Data.viewCardCount;
export const getError = (state: StoreType): string | null => state.Data.error;
export const getLength = (state: StoreType): number => state.Data.films.length;
export const getGenre = (state: StoreType): string => state.Data.genre;
