// Библиотеки
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

// Типы
import { FilmData, TabsName } from '../../types/film';

// Константы
import { comments } from '../../mocks/films';

// Компоненты
import TabOverview from '../tab-overview/tab-overview';
import TabDetails from '../tab-details/tab-details';
import TabReview from '../tab-reviews/tab-review';


export default function Tabs({ film }: { film: FilmData }): JSX.Element {
  const searchTab = useSearchParams()[0];
  const tabIndex = searchTab.get('tab') || TabsName.Overview;
  const [currentTab, setTab] = useState(tabIndex);
  if (tabIndex !== currentTab) { setTab(tabIndex); }

  useEffect(() => {
    window.scroll(0, 0);
  }, [film.id]);

  let selectedTab;
  switch (currentTab) {
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

  const tabLinks = [];
  for (const enumTab in TabsName) {
    tabLinks.push(
      <li
        key={enumTab}
        className={currentTab === enumTab ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
      >
        <Link
          to={`/films/${film.id}?tab=${enumTab}`}
          onClick={(evt) => {
            setTab(enumTab);
          }}
          className="film-nav__link"
        >
          {enumTab}
        </Link>
      </li>);
  }

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabLinks}
        </ul>
      </nav>
      {selectedTab}
    </div >
  );
}
