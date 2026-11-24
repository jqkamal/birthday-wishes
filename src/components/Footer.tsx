import { Heart, Instagram, Mail } from 'lucide-react';
import { birthday } from '@/config/birthday';

export default function Footer() {
  const { instagram, email } = birthday.socialLinks;

  return (
    <footer className="bg-rose-800 px-6 py-16 text-rose-50">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="font-display text-3xl font-medium">
          Happy Birthday, {birthday.friendName}
        </p>
        <p className="mt-4 max-w-xl text-base text-rose-100">
          May this year bring you the same light you bring into every room. Thank you for being you.
        </p>

        <p className="mt-8 inline-flex items-center gap-2 text-sm text-rose-100">
          Made with
          <Heart className="h-4 w-4 fill-rose-300 text-rose-300" aria-hidden="true" />
          and a lot of love
        </p>

        {(instagram || email) && (
          <div className="mt-8 flex items-center gap-3">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-700 transition-colors hover:bg-rose-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-400"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-700 transition-colors hover:bg-rose-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-400"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
          </div>
        )}

        <p className="mt-12 text-xs text-rose-200">
          &copy; {new Date().getFullYear()} Made for {birthday.friendName} Priya 💗
        </p>
      </div>
    </footer>
  );
}
