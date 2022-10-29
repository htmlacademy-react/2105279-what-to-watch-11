import { Helmet } from 'react-helmet-async';

export default function NotFound(): JSX.Element {
  return (
    <div>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h1>404 Not Found</h1>
      <a href="/">Вернуться на главную</a>
    </div>
  );
}
