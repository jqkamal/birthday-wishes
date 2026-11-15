import { useEffect, useRef, useState } from 'react';
import { createBirthdayMelody } from '@/lib/birthdayMelody';

export function useBirthdayMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<ReturnType<typeof createBirthdayMelody> | null>(null);

  useEffect(() => {
    playerRef.current = createBirthdayMelody();
    return () => playerRef.current?.stop();
  }, []);

  const toggle = () => {
    const player = playerRef.current;
    if (!player) return;
    if (isPlaying) {
      player.stop();
      setIsPlaying(false);
    } else {
      player.start();
      setIsPlaying(true);
    }
  };

  return { isPlaying, toggle };
}
