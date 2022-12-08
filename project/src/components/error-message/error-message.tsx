//Библиотеки
import { useSelector } from 'react-redux';

//Типы
import { StoreType } from '../../store/index';

//Компоненты
import './error-message.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useSelector((state: StoreType) => state.film.error);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}
