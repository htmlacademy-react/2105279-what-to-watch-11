// Библиотеки
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Типы
import { FilmData } from '../../types/film';

// Константы
import { comments } from '../../mocks/films';

// Компоненты
import TabOverview from '../tab-overview/tab-overview';
import TabDetails from '../tab-details/tab-details';
import TabReview from '../tab-reviews/tab-review';

const tabs = [
  'Overview',
  'Details',
  'Reviews',
];

enum TabsName {
  Overview,
  Details,
  Reviews,
}


export default function Tabs({ film, tabIndex }: { film: FilmData; tabIndex: number }): JSX.Element {
  const [tab, setTab] = useState(tabIndex || 0);

  let selectedTab;

  switch (tab) {
    case TabsName.Overview:
      selectedTab = <TabOverview film={film} />;
      break;
    case TabsName.Details:
      selectedTab = <TabDetails film={film} />;
      break;
    case TabsName.Reviews:
      selectedTab = <TabReview comments={comments} />;
      break;
  }

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs
            .map((tabName, index) => (
              <li
                key={tabName}
                className={tab === index ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
              >
                <Link
                  to={`/films/${film.id}?tab=${index}`}
                  onClick={(evt) => {
                    setTab(index);
                  }}
                  className="film-nav__link"
                >
                  {tabName}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      {selectedTab}
    </div >
  );
}
