// Библиотеки
import { useState } from 'react';

// Типы
import { FilmData } from '../../types/film';

// Компоненты
import TabOverview from '../tab-overview/tab-overview';

const tabs = [
  'Overview',
  'Details',
  'Reviews',
];


export default function Tabs({ film }: { film: FilmData }): JSX.Element {
  const [tab, setTab] = useState(0);

  let selectedTab;

  switch (tab) {
    case 0:
      selectedTab = <TabOverview film={film} />;


  }

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs
            .map((tabName, index) => (
              <li
                key={tabName}
                className="film-nav__item film-nav__item--active"
              >
                <a
                  href={`/films/${film.id}`}
                  onClick={(evt) => {
                    evt.preventDefault();
                    setTab(index);
                  }}
                  className="film-nav__link"
                >
                  {tabName}
                </a>
              </li>
            ))}
        </ul>
      </nav>
      {selectedTab}
    </div >
  );
}
