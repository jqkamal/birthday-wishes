import { useState } from 'react';
import { MailOpen } from 'lucide-react';
import { birthday } from '@/config/birthday';
import FloatingDecor from '@/components/FloatingDecor';

export default function BirthdayLetter() {
  const [opened, setOpened] = useState(false);
  const { letter } = birthday;

  return (
    <section id="letter" className="relative scroll-mt-20 overflow-hidden bg-cream-100 px-6 py-24">
      <FloatingDecor variant="mixed" count={14} />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-600">Final chapter</p>
        <h2 className="mt-4 font-display text-4xl font-medium text-ink-900 sm:text-5xl">A Secret Letter</h2>
        <p className="mx-auto mt-4 max-w-md text-base text-ink-700">
          Something written just for you, sealed with a little heart.
        </p>

        <div className="relative mx-auto mt-14 h-56 w-full max-w-md [perspective:1000px]">
          <div
            className={`absolute inset-x-6 top-6 h-44 rounded-2xl bg-white shadow-soft transition-transform duration-[1200ms] ease-out ${
              opened ? '-translate-y-24' : 'translate-y-0'
            }`}
          >
            <div className="flex h-full flex-col items-center justify-center gap-2 px-6">
              <span className="font-display text-xl italic text-rose-700">For {birthday.friendName}</span>
              <span className="h-px w-16 bg-rose-200" />
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br from-rose-200 to-peach-200 shadow-card">
            <div
              className="absolute inset-x-0 top-0 h-1/2 origin-top bg-rose-300/90 transition-transform duration-[900ms] ease-in-out"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transform: opened ? 'rotateX(180deg)' : 'rotateX(0deg)',
                transformStyle: 'preserve-3d',
                zIndex: opened ? 0 : 2,
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-rose-200 to-rose-100" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className={`z-10 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500 text-white shadow-card transition-all duration-500 ${
                  opened ? 'scale-0 opacity-0' : 'animate-twinkle'
                }`}
              >
                <MailOpen className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>

        {!opened ? (
          <button
            type="button"
            onClick={() => setOpened(true)}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-4 text-base font-medium text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200"
          >
            Open Your Gift
          </button>
        ) : (
          <article className="animate-fadeUp mx-auto mt-10 rounded-[2rem] bg-white px-8 py-10 text-left shadow-card sm:px-12">
            <p className="font-display text-2xl italic text-rose-700">{letter.salutation}</p>
            <div className="mt-6 space-y-4 text-base leading-[1.5] text-ink-700">
              {letter.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 font-display text-lg italic text-ink-800">{letter.signature}</p>
          </article>
        )}
      </div>
    </section>
  );
}
