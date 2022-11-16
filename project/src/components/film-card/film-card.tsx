// Библиотеки
import React from 'react';
import { Link } from 'react-router-dom';

// Типы
import { FilmData } from '../../types/film';

// Компоненты
import VideoPlayer from '../video-player/video-player';

type previewFilm = Pick<FilmData, 'id' | 'name' | 'previewImage' | 'previewVideoLink'> & { onCardMouseEnter: () => void };

export default function FilmCard({ id, name, previewImage, previewVideoLink, onCardMouseEnter }: previewFilm): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onCardMouseEnter}
    >
      <VideoPlayer
        src={previewVideoLink}
        previewImage={previewImage}
        muted
        width={280}
        height={175}
      />
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}
