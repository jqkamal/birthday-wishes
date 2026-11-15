const BEAT_SECONDS = 0.55;

type Note = { frequency: number; beats: number };

const REST = 0;
const G4 = 392;
const A4 = 440;
const B4 = 493.88;
const C5 = 523.25;
const D5 = 587.33;
const E5 = 659.25;
const F5 = 698.46;
const G5 = 783.99;

const HAPPY_BIRTHDAY: Note[] = [
  { frequency: G4, beats: 0.5 },
  { frequency: G4, beats: 0.5 },
  { frequency: A4, beats: 1 },
  { frequency: G4, beats: 1 },
  { frequency: C5, beats: 1 },
  { frequency: B4, beats: 2 },
  { frequency: G4, beats: 0.5 },
  { frequency: G4, beats: 0.5 },
  { frequency: A4, beats: 1 },
  { frequency: G4, beats: 1 },
  { frequency: D5, beats: 1 },
  { frequency: C5, beats: 2 },
  { frequency: G4, beats: 0.5 },
  { frequency: G4, beats: 0.5 },
  { frequency: G5, beats: 1 },
  { frequency: E5, beats: 1 },
  { frequency: C5, beats: 1 },
  { frequency: B4, beats: 1 },
  { frequency: A4, beats: 2 },
  { frequency: F5, beats: 0.5 },
  { frequency: F5, beats: 0.5 },
  { frequency: E5, beats: 1 },
  { frequency: C5, beats: 1 },
  { frequency: D5, beats: 1 },
  { frequency: C5, beats: 2 },
  { frequency: REST, beats: 1 },
];

export type MelodyPlayer = {
  start: () => void;
  stop: () => void;
};

export function createBirthdayMelody(): MelodyPlayer {
  let context: AudioContext | null = null;
  let timer: number | null = null;
  let noteIndex = 0;

  const playNote = (note: Note, when: number) => {
    if (!context || note.frequency === REST) return;
    const duration = note.beats * BEAT_SECONDS;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.value = note.frequency;
    gain.gain.setValueAtTime(0, when);
    gain.gain.linearRampToValueAtTime(0.18, when + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, when + duration * 0.95);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(when);
    oscillator.stop(when + duration);
  };

  const scheduleNext = () => {
    if (!context) return;
    const note = HAPPY_BIRTHDAY[noteIndex];
    playNote(note, context.currentTime + 0.05);
    noteIndex = (noteIndex + 1) % HAPPY_BIRTHDAY.length;
    timer = window.setTimeout(scheduleNext, note.beats * BEAT_SECONDS * 1000);
  };

  return {
    start() {
      if (!context) context = new AudioContext();
      void context.resume();
      if (timer === null) scheduleNext();
    },
    stop() {
      if (timer !== null) {
        window.clearTimeout(timer);
        timer = null;
      }
      void context?.suspend();
    },
  };
}
