
import { useEffect, useRef, useState } from 'react';

export function useBirthdayMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(
      `${import.meta.env.BASE_URL}music/bday.mp3`
    );

    audio.loop = true;
    audio.volume = 0.7;
    audio.preload = 'auto';

    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);

    audio.onerror = () => {
      console.error('Birthday music failed to load:', audio.error);
    };

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error('Music playback error:', error);
      }
    } else {
      audio.pause();
    }
  };

  return { isPlaying, toggle };
}
