//Типы
import { StoreType } from '../types/store';
import { FilmData, CommentData } from '../types/film';

//Константы
import { AuthorizationStatus } from '../const';

export const getFilms = (state: StoreType): FilmData[] => state.DATA.films;
export const getFavorite = (state: StoreType): FilmData[] => state.DATA.favorite;
export const getFilm = (state: StoreType): FilmData => state.DATA.film as FilmData;
export const getComments = (state: StoreType): CommentData[] => state.DATA.comments;
export const getAuthorizationStatus = (state: StoreType): AuthorizationStatus => state.USER.authorizationStatus;
export const getCardCount = (state: StoreType): number => state.DATA.viewCardCount;
export const getError = (state: StoreType): string | null => state.DATA.error;
export const getLength = (state: StoreType): number => state.DATA.films.length;
export const getGenre = (state: StoreType): string => state.DATA.genre;
