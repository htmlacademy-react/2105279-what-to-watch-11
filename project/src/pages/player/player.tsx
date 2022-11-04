// Библиотеки
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

// Типы
import { MainProps } from '../../types/film';


export default function Player(props: MainProps): JSX.Element {
  const { id } = useParams();
  const filmId = Number(id);
  const videoLink = props.films.find((value) => (value.id === filmId))?.videoLink;
  if (!videoLink) {
    window.location.pathname = 'not found';
  }
  return (
    <div className="player">
      <Helmet>
        <title>Проигрыватель</title>
      </Helmet>
      <video src={videoLink} className="player__video" poster="img/player-poster.jpg"></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div >
  );
}
