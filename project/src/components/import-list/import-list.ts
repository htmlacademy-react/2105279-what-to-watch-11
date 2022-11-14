/* eslint-disable @typescript-eslint/no-unused-vars */

// список импорта
// шаблон для создания новых компонентов

// Библиотеки
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { Navigate, useParams, Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Типы
import { FilmData, MainProps } from '../../types/film';

// Константы
import { AppRoute, AuthorizationStatus } from '../../const';
import { films } from '../../mocks/films';

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
