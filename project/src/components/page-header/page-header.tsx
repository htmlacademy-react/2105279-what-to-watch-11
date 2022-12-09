// Библиотеки
import { SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Константы
import { AuthorizationStatus } from '../../const';

//Модули
import { StoreType } from '../../store/index';
import { logoutAction } from '../../store/api-actions';
import { AppDispatch } from '../../types/store';

export default function PageHeader() {
  const dispatch = useDispatch<AppDispatch>();
  const authorizationStatus = useSelector((state: StoreType) => state.film.authorizationStatus);

  const handleSignOut = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  const userBlock = authorizationStatus === AuthorizationStatus.Auth
    ? (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a
            onClick={handleSignOut}
            href="/"
            className="user-block__link"
          >Sign out
          </a>
        </li>
      </ul>
    )
    : (
      <div className="user-block">
        <a href="login" className="user-block__link">Sign in</a>
      </div>
    );

  return (
    <header className="page-header">
      <div className="logo">
        <a href="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {userBlock}

    </header>
  );
}
