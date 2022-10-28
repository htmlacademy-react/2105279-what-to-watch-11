import Main from '../../pages/main/main';

type MainProps = {
  filmName: string;
  genre: string;
  data: number;
};

export default function App(props: MainProps): JSX.Element {
  return <Main filmName={props.filmName} genre={props.genre} data={props.data} />;
}
