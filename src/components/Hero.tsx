import { ArrowDown, Sparkles } from 'lucide-react';
import { birthday } from '@/config/birthday';
import CakeIllustration from '@/components/CakeIllustration';
import Countdown from '@/components/Countdown';
import FloatingDecor from '@/components/FloatingDecor';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-gradient-to-b from-peach-100 via-cream-100 to-cream-100 px-6 pb-16 pt-28"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-peach-300/50 blur-3xl" />
      <FloatingDecor variant="mixed" count={16} />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="animate-fadeUp text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-sm font-medium text-rose-700">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            A surprise made with love
          </p>

          <h1 className="mt-6 font-display text-4xl font-medium text-ink-900 sm:text-5xl lg:text-6xl">
            {birthday.greeting},
            <span className="mt-2 block text-rose-600 italic">{birthday.friendName}!</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base text-ink-700 sm:text-lg lg:mx-0">
            {birthday.tagline}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-ink-600">Turning</p>
            <span className="font-display text-7xl font-medium leading-none text-rose-500 sm:text-8xl">
              {birthday.age}
            </span>
          </div>

          <a
            href="#memories"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-rose-500 px-8 py-4 text-base font-medium text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200"
          >
            Explore Surprise
            <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true" />
          </a>

          <div className="mt-12">
            <Countdown />
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-10 rounded-full bg-gradient-to-br from-rose-200 to-peach-200 opacity-70 blur-2xl" />
          <div className="relative animate-float">
            <CakeIllustration lit />
          </div>
        </div>
      </div>
    </section>
  );
}
