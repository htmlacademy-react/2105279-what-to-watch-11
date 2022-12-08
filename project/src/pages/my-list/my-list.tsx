/* eslint-disable jsx-a11y/anchor-is-valid */

// Библиотеки
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Компоненты
import CardList from '../../components/card-list/card-list';
import PageHeader from '../../components/page-header/page-header';


export default function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>Мой список</title>
      </Helmet>

      <PageHeader />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CardList />

      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
