//Хуки
import { useAppSelector } from '../../hooks';

//Компоненты
import './error-message.css';

//Глобальное состояние
import { getError } from '../../store/selectors';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}
