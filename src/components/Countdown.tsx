import { useEffect, useState } from 'react';
import { birthday } from '@/config/birthday';

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function getNextBirthday(now: Date): Date {
  const { month, day } = birthday.birthdate;
  const thisYear = new Date(now.getFullYear(), month - 1, day);
  if (thisYear.getTime() > now.getTime()) return thisYear;
  return new Date(now.getFullYear() + 1, month - 1, day);
}

function getRemaining(target: Date, now: Date): Remaining {
  const total = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(total / 86_400_000);
  const hours = Math.floor((total % 86_400_000) / 3_600_000);
  const minutes = Math.floor((total % 3_600_000) / 60_000);
  const seconds = Math.floor((total % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const target = getNextBirthday(now);
  const remaining = getRemaining(target, now);
  const isToday =
    now.getMonth() === target.getMonth() && now.getDate() === target.getDate();

  const units: { label: string; value: number }[] = [
    { label: 'Days', value: remaining.days },
    { label: 'Hours', value: remaining.hours },
    { label: 'Minutes', value: remaining.minutes },
    { label: 'Seconds', value: remaining.seconds },
  ];

  return (
    <div className="inline-flex flex-col items-center gap-3">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-600">
        {isToday ? 'It is finally your day' : 'Counting down to your day'}
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex w-16 flex-col items-center rounded-2xl bg-white/80 px-2 py-3 shadow-soft sm:w-20"
          >
            <span className="font-display text-2xl text-rose-700 tabular-nums sm:text-3xl">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-ink-600">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
