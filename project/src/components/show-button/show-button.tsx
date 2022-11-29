// Библиотеки
import { useDispatch, useSelector } from 'react-redux';

//Модули
import { addViewCardCount } from '../../store/action';
import { StoreType } from '../../store/index';

export default function ShowButton(): JSX.Element {
  const dispatch = useDispatch();
  const viewCardCount = useSelector((state: StoreType) => state.film.viewCardCount);
  const films = useSelector((state: StoreType) => state.film.films);

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
