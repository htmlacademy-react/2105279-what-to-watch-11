/* eslint-disable @typescript-eslint/no-unused-vars */

// список импорта
// шаблон для создания новых компонентов

// Библиотеки
// Типы
// Константы
// Страницы
// Компоненты
//Модули


// Библиотеки
import React from 'react';
import { Fragment, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { Navigate, useParams, Link, Route, BrowserRouter, Routes, redirect } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import cn from 'classnames';

// Типы
import { FilmData, Genre } from '../../types/film';

// Константы
import { AppRoute, AuthorizationStatus } from '../../const';

// Страницы
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';

// Компоненты
import App from '../../components/app/app';
import PrivateRoute from '../private-route/private-route';
import FilmCard from '../../components/film-card/film-card';
import CardList from '../../components/card-list/card-list';
import FormReview from '../../components/form-review/form-review';
import Comment from '../comment/comment';
import ShowButton from '../../components/show-button/show-button';

//Модули
import { StoreType } from '../../store/index';
import { selectGenre } from '../../store/action';
