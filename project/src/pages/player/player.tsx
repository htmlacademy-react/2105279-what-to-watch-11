// Библиотеки
import { useState, useRef, useEffect, MouseEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';

//Хуки
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFilm } from '../../store/selectors';

//Компоненты
import LoadingScreen from '../loading-screen/loading-screen';

//модули
import { fetchFilmIdAction } from '../../store/api-actions';

interface DocumentElementWithFullscreen extends HTMLElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

const requestFullScreen = (element: DocumentElementWithFullscreen) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  }
};

export default function Player(): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const progress = `${(currentTime / durationTime) * 100}%`;

  let time = '';
  const hours = Math.trunc(currentTime / 3600);
  const minutes = Math.trunc(currentTime / 60 - hours * 60);
  const seconds = Math.trunc(currentTime - hours * 3600 - minutes * 60);
  time = `${hours ? hours : '00'}:${minutes ? minutes : '00'}:${seconds ? seconds : '00'}`;

  useEffect(() => {
    let isPlayerMounted = true;
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const handleCurrentTime = () => {
      if (isPlayerMounted && video) {
        setCurrentTime(video.currentTime);
      }
    };

    const handleDurationTime = () => {
      if (isPlayerMounted && video) {
        setDurationTime(video.duration);
      }
    };

    video.addEventListener('loadeddata', handleDurationTime);
    video.addEventListener('timeupdate', handleCurrentTime);

    return () => {
      isPlayerMounted = false;
      video.removeEventListener('timeupdate', handleCurrentTime);
      video.removeEventListener('loadeddata', handleDurationTime);
    };
  });

  useEffect(() => {
    let isPlayerMounted = true;
    if (id && isPlayerMounted) {
      dispatch(fetchFilmIdAction({ id, navigate }));
    }
    return () => {
      isPlayerMounted = false;
    };
  }, [dispatch, navigate, id]);

  useEffect(() => {
    if (isFullscreen) {
      if (videoRef.current) {
        requestFullScreen(videoRef.current);
      }
    }
    return () => setFullscreen(false);
  }, [isFullscreen]);

  const film = useAppSelector(getFilm);
  if (!film) {
    return <LoadingScreen />;
  }

  const handleExitButtonClick = () => {
    navigate(`/films/${film.id}`);
    setIsPlaying(false);
  };

  const handlePauseButtonClick = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const handlePlayButtonClick = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const handleProgressClick = (evt: MouseEvent) => {
    if (videoRef.current) {
      const position = evt.clientX;
      const size = evt.currentTarget.clientWidth;
      videoRef.current.currentTime = durationTime * position / size;
    }
  };

  return (
    <div className="player">
      <Helmet>
        <title>Проигрыватель</title>
      </Helmet>

      <video
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
        autoPlay
        data-testid="video"
        ref={videoRef}
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={handleExitButtonClick}
      >
        Exit
      </button>

      <div className="player__controls">
        <div
          className="player__controls-row"
          onClick={handleProgressClick}
        >
          <div className="player__time">
            <progress
              className="player__progress"
              value={currentTime}
              max={durationTime}
            >
            </progress>
            <div className="player__toggler" style={{ left: progress }}>Toggler</div>
          </div>
          <div className="player__time-value">{time}</div>
        </div>

        <div className="player__controls-row">
          {
            !isPlaying ? (
              <button
                type="button"
                className="player__play"
                onClick={handlePlayButtonClick}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>) : (
              <button
                type="button"
                className="player__play"
                onClick={handlePauseButtonClick}
              >
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </button>)
          }

          <div className="player__name">{film.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => setFullscreen(true)}
          >
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
