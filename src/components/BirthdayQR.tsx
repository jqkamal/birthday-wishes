import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Download, QrCode } from 'lucide-react';
import { birthday } from '@/config/birthday';

export default function BirthdayQR() {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const pageUrl = window.location.href;

  useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(pageUrl, {
      width: 480,
      margin: 2,
      errorCorrectionLevel: 'M',
      color: { dark: '#7a2c47', light: '#fffdf8' },
    })
      .then((url) => {
        if (!cancelled) setDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [pageUrl]);

  return (
    <section id="qr" className="scroll-mt-20 bg-peach-100 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-600">Chapter four</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-ink-900 sm:text-5xl">
            Your Birthday Code
          </h2>
        </header>

        <div className="mt-16 grid items-center gap-12 rounded-[2.5rem] bg-white/80 p-8 shadow-card md:grid-cols-2 md:p-12">
          <div className="mx-auto flex w-full max-w-xs flex-col items-center">
            <div className="flex aspect-square w-full items-center justify-center rounded-3xl bg-cream-50 p-4 shadow-soft">
              {dataUrl ? (
                <img src={dataUrl} alt="QR code that opens this birthday website" className="h-full w-full" />
              ) : (
                <p className="px-4 text-center text-sm text-ink-600">
                  {failed ? 'The QR code could not be created right now. Please refresh the page.' : 'Creating your code...'}
                </p>
              )}
            </div>
            {dataUrl && (
              <a
                href={dataUrl}
                download="birthday-surprise-qr.png"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-rose-300 px-5 py-2.5 text-sm font-medium text-rose-700 transition-colors hover:bg-rose-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Save QR Code
              </a>
            )}
          </div>

          <div className="text-center md:text-left">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
              <QrCode className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-display text-3xl text-ink-900">Scan to open your surprise</h3>
            <p className="mt-4 text-base text-ink-700">
              Point any phone camera at this code and your birthday website opens right away. Wherever you
              are today, {birthday.friendName}, this little corner of the internet is yours.
            </p>
            <p className="mt-4 font-display text-lg italic text-rose-700">
              Happy Birthday, and never stop shining.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
