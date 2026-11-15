import { useMemo } from 'react';
import { Heart, Sparkles } from 'lucide-react';

type FloatingDecorProps = {
  variant: 'hearts' | 'sparkles' | 'mixed';
  count?: number;
};

type Item = {
  id: number;
  kind: 'heart' | 'sparkle';
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
};

const HEART_COLORS = ['text-rose-300', 'text-rose-400', 'text-peach-400'];
const SPARKLE_COLORS = ['text-peach-400', 'text-rose-300', 'text-amber-300'];

function createItems(variant: FloatingDecorProps['variant'], count: number): Item[] {
  return Array.from({ length: count }, (_, id) => {
    const kind: Item['kind'] =
      variant === 'mixed' ? (id % 2 === 0 ? 'heart' : 'sparkle') : variant === 'hearts' ? 'heart' : 'sparkle';
    const palette = kind === 'heart' ? HEART_COLORS : SPARKLE_COLORS;
    return {
      id,
      kind,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: kind === 'heart' ? 14 + Math.random() * 18 : 12 + Math.random() * 14,
      delay: Math.random() * 4,
      duration: 5 + Math.random() * 4,
      color: palette[id % palette.length],
    };
  });
}

export default function FloatingDecor({ variant, count = 12 }: FloatingDecorProps) {
  const items = useMemo(() => createItems(variant, count), [variant, count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map((item) => {
        const Icon = item.kind === 'heart' ? Heart : Sparkles;
        return (
          <span
            key={item.id}
            className={`absolute animate-float opacity-70 ${item.color}`}
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
            }}
          >
            <Icon
              style={{ width: item.size, height: item.size }}
              fill={item.kind === 'heart' ? 'currentColor' : 'none'}
            />
          </span>
        );
      })}
    </div>
  );
}
