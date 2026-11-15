import { Music, Pause, Play } from 'lucide-react';
import { useBirthdayMusic } from '@/hooks/useBirthdayMusic';

export default function MusicToggle() {
  const { isPlaying, toggle } = useBirthdayMusic();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isPlaying ? 'Pause birthday music' : 'Play birthday music'}
      aria-pressed={isPlaying}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full bg-white/90 py-2.5 pl-2.5 pr-5 text-sm font-medium text-rose-700 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white">
        {isPlaying ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4 translate-x-px" aria-hidden="true" />}
      </span>
      <span className="flex items-end gap-0.5" aria-hidden="true">
        {[0, 1, 2, 3].map((bar) => (
          <span
            key={bar}
            className={`h-4 w-1 origin-bottom rounded-full bg-rose-400 ${isPlaying ? 'animate-bar' : 'scale-y-[0.35]'}`}
            style={{ animationDelay: `${bar * 0.15}s` }}
          />
        ))}
      </span>
      <span className="hidden items-center gap-1.5 sm:flex">
        <Music className="h-3.5 w-3.5" aria-hidden="true" />
        {isPlaying ? 'Playing' : 'Birthday music'}
      </span>
    </button>
  );
}
