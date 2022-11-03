// Библиотеки
import React from 'react';
import ReactDOM from 'react-dom/client';

// Константы
import { films } from './mocks/films';

// Компоненты
import App from './components/app/app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App films={films} />
  </React.StrictMode>,
);
