import { useState } from 'react';
import type { ReactNode } from 'react';
import { Gift, Heart, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { birthday } from '@/config/birthday';

type GiftCardProps = {
  icon: LucideIcon;
  title: string;
  accentClass: string;
  children: ReactNode;
};

function GiftCard({ icon: Icon, title, accentClass, children }: GiftCardProps) {
  return (
    <article className="group flex flex-col rounded-[2rem] bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card">
      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accentClass}`}>
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-6 font-display text-2xl text-ink-900">{title}</h3>
      <div className="mt-3 flex-1 text-base leading-[1.5] text-ink-700">{children}</div>
    </article>
  );
}

export default function GiftCards() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="gifts" className="scroll-mt-20 bg-cream-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-600">Chapter three</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-ink-900 sm:text-5xl">Three Little Gifts</h2>
        </header>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <GiftCard icon={Gift} title="Birthday Wishes" accentClass="bg-rose-100 text-rose-600">
            <p>{birthday.gifts.wishes}</p>
          </GiftCard>

          <GiftCard icon={Heart} title="Personal Memories" accentClass="bg-peach-200 text-rose-700">
            <p>{birthday.gifts.memories}</p>
          </GiftCard>

          <GiftCard icon={Sparkles} title="Secret Surprise" accentClass="bg-rose-200 text-rose-800">
            {revealed ? (
              <p className="animate-fadeUp">{birthday.gifts.secret}</p>
            ) : (
              <button
                type="button"
                onClick={() => setRevealed(true)}
                className="rounded-full border border-rose-300 px-5 py-2.5 text-sm font-medium text-rose-700 transition-colors hover:bg-rose-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200"
              >
                Tap to reveal
              </button>
            )}
          </GiftCard>
        </div>
      </div>
    </section>
  );
}
