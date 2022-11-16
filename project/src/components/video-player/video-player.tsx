// Библиотеки
import { useState, useEffect, useRef } from 'react';

// Типы
// import { FilmData, MainProps } from '../../types/film';

// Константы
// import { films } from '../../mocks/films';


type VideoPlayerProps = {
  src: string;
  previewImage: string;
  muted: boolean;
  width: number;
  height: number;
}

export default function VideoPlayer({ src, previewImage, muted, width, height }: VideoPlayerProps): JSX.Element {
  // const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // let isVideoPlayerMounted = true;

    if (videoRef.current === null) {
      return;
    }

    // videoRef.current.addEventListener('loadeddata', () => {
    //   if (isVideoPlayerMounted) {
    //     setIsLoading(false);
    //   }
    // });

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.setPointerCapture(0);

    return () => {
      // isVideoPlayerMounted = false;
    };
  }, [isPlaying]);

  return (
    <div className="small-film-card__image">
      <video
        src={src}
        poster={previewImage}
        muted={muted}
        width={width}
        height={height}
        ref={videoRef}
        onMouseEnter={() => setIsPlaying(true)}
        onMouseLeave={() => setIsPlaying(false)}
      />
    </div>
  );
}
