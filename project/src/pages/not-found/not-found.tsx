// Библиотеки
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import React from 'react';

//Компоненты
import PageHeader from '../../components/page-header/page-header';

export default function NotFound(): JSX.Element {
  return (
    <React.StrictMode>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="user-page">

        <PageHeader favorite={null} />

        <div className="sign-in user-page__content">
          <h1>404 Not Found</h1>
          <h2>
            <Link
              to="/"
              style={{ color: 'green' }}
            >
              Вернуться на главную
            </Link>
          </h2>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.StrictMode >
  );
}
