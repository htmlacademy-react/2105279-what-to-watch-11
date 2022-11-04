// Библиотеки
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


export default function NotFound(): JSX.Element {
  return (
    <div>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h1>404 Not Found</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}
