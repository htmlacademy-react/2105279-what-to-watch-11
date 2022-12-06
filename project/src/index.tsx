// Библиотеки
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Константы

// Компоненты
import App from './components/app/app';

//Модули
import { store } from './store/index';
import { checkAuthAction } from './store/api-actions';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
);
