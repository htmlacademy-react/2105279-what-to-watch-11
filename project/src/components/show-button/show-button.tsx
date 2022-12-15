import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFilms, getCardCount } from '../../store/selectors';
import { addViewCardCount } from '../../store/film-data/film-data';

export default function ShowButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const viewCardCount = useAppSelector(getCardCount);
  const films = useAppSelector(getFilms);

  return (viewCardCount < films.length)
    ? (
      <div className="catalog__more">
        <button
          className="catalog__button"
          type="button"
          onClick={
            () => {
              dispatch(addViewCardCount());
            }
          }
        >
          Show more
        </button>
      </div>
    ) : <div></div>;
}
