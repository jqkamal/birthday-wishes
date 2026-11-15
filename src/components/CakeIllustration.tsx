type CakeIllustrationProps = {
  lit: boolean;
};

const CANDLE_X = [116, 137, 160, 183, 204];
const CANDLE_TOP = 46;
const CANDLE_COLORS = ['#f9a1b5', '#fdc4d1', '#f7c9a8', '#fdc4d1', '#f9a1b5'];

const SPRINKLES: { x: number; y: number; rotate: number; color: string }[] = [
  { x: 70, y: 226, rotate: 30, color: '#f07d99' },
  { x: 92, y: 240, rotate: -20, color: '#fff8f3' },
  { x: 120, y: 228, rotate: 70, color: '#f9a1b5' },
  { x: 150, y: 242, rotate: 10, color: '#fbe0cc' },
  { x: 180, y: 226, rotate: -45, color: '#f07d99' },
  { x: 212, y: 240, rotate: 55, color: '#fff8f3' },
  { x: 240, y: 226, rotate: 15, color: '#f9a1b5' },
  { x: 102, y: 160, rotate: 40, color: '#fff8f3' },
  { x: 140, y: 170, rotate: -30, color: '#f07d99' },
  { x: 178, y: 158, rotate: 80, color: '#fbe0cc' },
  { x: 212, y: 172, rotate: -10, color: '#fff8f3' },
  { x: 128, y: 104, rotate: 25, color: '#f07d99' },
  { x: 160, y: 110, rotate: -60, color: '#fff8f3' },
  { x: 194, y: 102, rotate: 50, color: '#f9a1b5' },
];

const DRIPS_BOTTOM = [0.08, 0.2, 0.36, 0.55, 0.7, 0.86];
const DRIPS_MIDDLE = [0.12, 0.3, 0.5, 0.74, 0.9];
const DRIPS_TOP = [0.18, 0.42, 0.66, 0.84];

function Drips({ x, y, width, fractions }: { x: number; y: number; width: number; fractions: number[] }) {
  return (
    <>
      {fractions.map((fraction, index) => {
        const height = 8 + ((index * 7) % 5) * 4;
        return (
          <g key={fraction}>
            <rect x={x + width * fraction} y={y} width={11} height={height} rx={5.5} fill="url(#icing)" />
            <circle cx={x + width * fraction + 5.5} cy={y + height} r={6} fill="url(#icing)" />
          </g>
        );
      })}
    </>
  );
}

function Tier({
  x,
  y,
  width,
  height,
  drips,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  drips: number[];
}) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={16} fill="url(#tier)" />
      <rect x={x} y={y} width={width} height={6} fill="rgba(255,255,255,0.35)" />
      <rect x={x - 3} y={y - 2} width={width + 6} height={22} rx={11} fill="url(#icing)" />
      <Drips x={x - 3} y={y + 14} width={width + 6} fractions={drips} />
    </g>
  );
}

function Flame({ cx }: { cx: number }) {
  return (
    <g transform={`translate(${cx}, 40)`}>
      <g className="animate-flicker" style={{ transformBox: 'fill-box', transformOrigin: 'center bottom' }}>
        <path d="M0,-16 C8,-7 8,4 0,7 C-8,4 -8,-7 0,-16Z" fill="url(#flame)" />
        <path d="M0,-6 C3,-2 3,3 0,5 C-3,3 -3,-2 0,-6Z" fill="#fff6d6" />
      </g>
    </g>
  );
}

export default function CakeIllustration({ lit }: CakeIllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 290"
      className="h-auto w-full max-w-[360px] drop-shadow-[0_25px_25px_rgba(158,53,83,0.25)]"
      role="img"
      aria-label={lit ? 'A birthday cake with lit candles' : 'A birthday cake with candles blown out'}
    >
      <defs>
        <linearGradient id="tier" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbc7d4" />
          <stop offset="100%" stopColor="#f19bb2" />
        </linearGradient>
        <linearGradient id="icing" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffdf8" />
          <stop offset="100%" stopColor="#fbe9ea" />
        </linearGradient>
        <linearGradient id="plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdf0e6" />
          <stop offset="100%" stopColor="#f5dcc8" />
        </linearGradient>
        <linearGradient id="flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff3b0" />
          <stop offset="45%" stopColor="#ffc15e" />
          <stop offset="100%" stopColor="#f08a3c" />
        </linearGradient>
        <radialGradient id="glow">
          <stop offset="0%" stopColor="#ffd98a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffd98a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={160} cy={258} rx={142} ry={16} fill="url(#plate)" />
      <ellipse cx={160} cy={254} rx={128} ry={9} fill="#f5dcc8" opacity={0.6} />

      <Tier x={44} y={196} width={232} height={56} drips={DRIPS_BOTTOM} />
      <Tier x={72} y={134} width={176} height={62} drips={DRIPS_MIDDLE} />
      <Tier x={100} y={84} width={120} height={50} drips={DRIPS_TOP} />

      {SPRINKLES.map((sprinkle, index) => (
        <rect
          key={index}
          x={sprinkle.x}
          y={sprinkle.y}
          width={9}
          height={3.5}
          rx={1.75}
          fill={sprinkle.color}
          transform={`rotate(${sprinkle.rotate} ${sprinkle.x + 4.5} ${sprinkle.y + 1.75})`}
        />
      ))}

      {CANDLE_X.map((cx, index) => (
        <g key={cx}>
          <rect
            x={cx - 5}
            y={CANDLE_TOP}
            width={10}
            height={38}
            rx={3}
            fill={CANDLE_COLORS[index]}
          />
          <rect x={cx - 5} y={CANDLE_TOP} width={3} height={38} rx={1.5} fill="rgba(255,255,255,0.45)" />
          <rect x={cx - 1.5} y={CANDLE_TOP - 4} width={3} height={5} rx={1.5} fill="#8a5a4a" />
        </g>
      ))}

      <g
        className={`transition-opacity duration-700 ${lit ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      >
        {CANDLE_X.map((cx) => (
          <Flame key={cx} cx={cx} />
        ))}
        <circle cx={160} cy={22} r={120} fill="url(#glow)" opacity={0.35} />
      </g>

      <g className={`transition-opacity duration-700 ${lit ? 'opacity-0' : 'opacity-100'}`} aria-hidden="true">
        {CANDLE_X.map((cx, index) => (
          <g key={cx} transform={`translate(${cx}, 40)`}>
            <path
              d="M0,0 C-4,-10 6,-16 0,-26 C-6,-34 4,-40 0,-48"
              fill="none"
              stroke="rgba(120,100,110,0.35)"
              strokeWidth={2.5}
              strokeLinecap="round"
              className="animate-smoke"
              style={{ animationDelay: `${index * 0.35}s` }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
