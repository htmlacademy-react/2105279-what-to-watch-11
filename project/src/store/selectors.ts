//Типы
import { StoreType } from '../types/store';
import { FilmData, CommentData } from '../types/film';
import { AuthorizationStatus } from '../const';


export const getFilms = (state: StoreType): FilmData[] => state.film.films;
export const getFilm = (state: StoreType): FilmData => state.film.film as FilmData;
export const getComments = (state: StoreType): CommentData[] => state.film.comments;
export const getAuthorizationStatus = (state: StoreType): AuthorizationStatus => state.film.authorizationStatus;
export const getCardCount = (state: StoreType): number => state.film.viewCardCount;
export const getError = (state: StoreType): string | null => state.film.error;
export const getLength = (state: StoreType): number => state.film.films.length;
export const getGenre = (state: StoreType): string => state.film.genre;
