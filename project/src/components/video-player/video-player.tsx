// Библиотеки
import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  isPlaying: boolean;
  muted: boolean;
  src: string;
  previewImage: string;
  width: number;
  height: number;
}

export default function VideoPlayer({ isPlaying, src, previewImage, muted, width, height }: VideoPlayerProps): JSX.Element {
  // const setIsLoading = useState(true)[1];

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    // setIsLoading(false);

  }, [isPlaying]);

  return (
    <video
      preload={'auto'}
      loop
      muted={muted}
      src={src}
      poster={previewImage}
      width={width}
      height={height}
      ref={videoRef}
    />
  );
}
