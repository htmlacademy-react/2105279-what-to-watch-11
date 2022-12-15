import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilmData } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

const PLAYBACK_DELAY = 1000;
type previewFilm = Pick<FilmData, 'id' | 'name' | 'previewImage' | 'previewVideoLink'>;

export default function FilmCard({ id, name, previewImage, previewVideoLink }: previewFilm): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(setTimeout(() => 0, 0));

  const handleCardMouseEnter = () => {
    setTimer(setTimeout(() => {
      setIsPlaying(true);
    }, PLAYBACK_DELAY));
  };

  const handleCardMouseLeave = () => {
    clearTimeout(timer);
    setIsPlaying(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      <Link
        to={`/films/${id}`}
        className="small-film-card__link"
      >
        <div className="small-film-card__image">
          <VideoPlayer
            isPlaying={isPlaying}
            src={previewVideoLink}
            previewImage={previewImage}
            muted
            width={280}
            height={175}
          />
        </div>
        <h3 className="small-film-card__title">
          <span className="small-film-card__link">
            {name}
          </span>
        </h3>
      </Link>
    </article>
  );
}
