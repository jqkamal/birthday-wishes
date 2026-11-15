import { useEffect, useMemo, useState } from 'react';

const COLORS = ['#f07d99', '#f9a1b5', '#fdc4d1', '#f7c9a8', '#f1ad85', '#fff8f3', '#c2446a'];
const PIECE_COUNT = 90;
const DURATION_MS = 6000;

type Piece = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  drift: number;
  size: number;
  color: string;
  round: boolean;
};

function createPieces(): Piece[] {
  return Array.from({ length: PIECE_COUNT }, (_, id) => ({
    id,
    left: Math.random() * 100,
    delay: Math.random() * 1.2,
    duration: 3.2 + Math.random() * 2.4,
    drift: (Math.random() - 0.5) * 240,
    size: 6 + Math.random() * 8,
    color: COLORS[id % COLORS.length],
    round: Math.random() > 0.6,
  }));
}

export default function Confetti() {
  const pieces = useMemo(createPieces, []);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setVisible(false), DURATION_MS);
    return () => window.clearTimeout(id);
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="absolute top-0 animate-confetti"
          style={{
            left: `${piece.left}%`,
            width: piece.size,
            height: piece.round ? piece.size : piece.size * 0.45,
            borderRadius: piece.round ? '9999px' : '2px',
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            ['--drift' as string]: `${piece.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
