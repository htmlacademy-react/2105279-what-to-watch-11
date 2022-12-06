//Библиотеки
import { useSelector } from 'react-redux';

//Типы
import { StateType } from '../../types/store';

//Компоненты
// import './error-message.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useSelector((state: StateType) => state.error);

  return (error)
    ? <div >{error}</div>
    : null;

}
