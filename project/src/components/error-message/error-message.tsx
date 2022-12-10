//Хуки
import { useAppSelector } from '../../hooks';
import { getError } from '../../store/selectors';

//Компоненты
import './error-message.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}
