// Библиотеки
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';

// Типы

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
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

//Модули
import { StoreType } from '../../store/index';

export default function App(): JSX.Element {
  const length = useSelector((state: StoreType) => state.film.films.length);

  if (!length) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <MyList />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<Film />}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReview />}
          />
          <Route
            path={AppRoute.Player}
            element={<Player />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
