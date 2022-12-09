// Библиотеки
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';

// Типы
import { FilmData, TabsName, CommentData } from '../../types/film';
import { StoreType } from '../../types/store';

// Компоненты
import TabOverview from '../tab-overview/tab-overview';
import TabDetails from '../tab-details/tab-details';
import TabReview from '../tab-reviews/tab-review';


export default function Tabs({ comments }: { comments: CommentData[] }): JSX.Element {
  const [searchTab, setSearchTab] = useSearchParams();
  const tabName = searchTab.get('tab') || TabsName.Overview;
  const [currentTab, setCurrentTab] = useState<TabsName>(tabName as TabsName);
  if (tabName !== currentTab) {
    setCurrentTab(tabName as TabsName);
  }

  const film = useSelector((state: StoreType) => state.film.film as FilmData);

  if (!film) {
    return (
      <div className="film-card__desc">
        <nav className="film-nav film-card__nav">
          <ul className="film-nav__list">
            Loading...
          </ul>
        </nav>
      </div >
    );
  }

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
        className={cn(
          'film-nav__item',
          { 'film-nav__item--active': currentTab === enumTab }
        )}
      >
        <a
          href={`/films/${film.id}?tab=${enumTab}`}
          onClick={(evt) => {
            evt.preventDefault();
            setSearchTab({ tab: enumTab });
            setCurrentTab(enumTab as TabsName);
          }}
          className="film-nav__link"
        >
          {enumTab}
        </a>
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
