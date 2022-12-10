//Хуки
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFilms, getCardCount } from '../../store/selectors';

//Модули
import { addViewCardCount } from '../../store/action';

export default function ShowButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const viewCardCount = useAppSelector(getCardCount);
  const films = useAppSelector(getFilms);

  if (viewCardCount < films.length) {
    return (
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
    );
  }
  return <div></div>;
}
