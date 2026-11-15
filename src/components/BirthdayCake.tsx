import { useState } from 'react';
import { Flame, PartyPopper, Wind } from 'lucide-react';
import { birthday } from '@/config/birthday';
import CakeIllustration from '@/components/CakeIllustration';
import Confetti from '@/components/Confetti';

export default function BirthdayCake() {
  const [lit, setLit] = useState(true);
  const [burstCount, setBurstCount] = useState(0);

  const handleBlowOut = () => {
    setLit(false);
    setBurstCount((count) => count + 1);
  };

  return (
    <section id="cake" className="relative scroll-mt-20 overflow-hidden bg-peach-100 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-600">Chapter two</p>
        <h2 className="mt-4 font-display text-4xl font-medium text-ink-900 sm:text-5xl">Make a Wish</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink-700 sm:text-lg">
          Close your eyes, think of something lovely, and blow out the candles.
        </p>

        <div className="relative mx-auto mt-12 flex max-w-xl flex-col items-center rounded-[2.5rem] bg-white/70 px-6 pb-10 pt-8 shadow-card backdrop-blur-sm">
          <CakeIllustration lit={lit} />

          <div className="mt-6 min-h-[7rem] w-full">
            {lit ? (
              <button
                type="button"
                onClick={handleBlowOut}
                className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-4 text-base font-medium text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200"
              >
                <Wind />
                Blow Out Candles
              </button>
            ) : (
              <div className="animate-fadeUp">
                <p className="inline-flex items-center gap-2 font-display text-3xl text-rose-700 sm:text-4xl">
                  <PartyPopper className="h-7 w-7" aria-hidden="true" />
                  Happy Birthday, {birthday.friendName}!
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm text-ink-700 sm:text-base">
                  Your wish is already on its way. Here is to a year as sweet as this cake.
                </p>
                <button
                  type="button"
                  onClick={() => setLit(true)}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-rose-300 bg-white px-6 py-3 text-sm font-medium text-rose-700 transition-colors hover:bg-rose-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200"
                >
                  <Flame className="h-4 w-4" aria-hidden="true" />
                  Light the Candles Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {burstCount > 0 && <Confetti key={burstCount} />}
    </section>
  );
}
