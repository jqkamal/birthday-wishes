import { useEffect, useState } from 'react';
import { Cake, Menu, X } from 'lucide-react';
import { birthday } from '@/config/birthday';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#memories', label: 'Memories' },
  { href: '#cake', label: 'Cake' },
  { href: '#gifts', label: 'Gifts' },
  { href: '#qr', label: 'QR Code' },
  { href: '#letter', label: 'Letter' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-cream-50/90 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2 text-rose-700">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
            <Cake className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-medium">For {birthday.friendName}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-ink-700 transition-colors hover:text-rose-600"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-rose-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-800 transition-colors hover:bg-rose-100 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-rose-100 bg-cream-50 transition-all duration-500 md:hidden ${
          open ? 'max-h-96' : 'max-h-0 border-transparent'
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block rounded-xl px-3 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-rose-50 hover:text-rose-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
