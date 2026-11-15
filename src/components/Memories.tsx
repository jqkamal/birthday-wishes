import { birthday } from '@/config/birthday';

export default function Memories() {
  return (
    <section id="memories" className="scroll-mt-20 bg-cream-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-600">Chapter one</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-ink-900 sm:text-5xl">
            Birthday Memories
          </h2>
          <p className="mt-4 text-base text-ink-700 sm:text-lg">
            A few of my favourite moments with you, kept safe in little frames.
          </p>
        </header>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {birthday.memories.map((memory, index) => (
            <figure
              key={memory.image}
              className="group relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
              style={{ animation: `fadeUp 0.9s ease-out ${index * 0.15}s both` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                <img
                  src={memory.image}
                  alt={memory.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/0 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <figcaption className="px-3 pb-3 pt-5 text-center">
                <span className="font-display text-xl italic text-rose-700">{memory.caption}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-ink-600">
                  Memory {String(index + 1).padStart(2, '0')}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
