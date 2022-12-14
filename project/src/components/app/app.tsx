import { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { fetchFilmAction, fetchFavoriteAction } from '../../store/api-actions';
import { getLength, getAuthorizationStatus } from '../../store/selectors';

export default function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const length = useAppSelector(getLength);
  const dispatch = useAppDispatch();

  useEffect(
    () => {
      if (!length) {
        dispatch(fetchFilmAction());
      }
    }, [dispatch, length]);

  useEffect(
    () => {
      dispatch(fetchFavoriteAction());
    }, [dispatch]);

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
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
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
