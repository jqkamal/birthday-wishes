import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Memories from '@/components/Memories';
import BirthdayCake from '@/components/BirthdayCake';
import GiftCards from '@/components/GiftCards';
import BirthdayQR from '@/components/BirthdayQR';
import BirthdayLetter from '@/components/BirthdayLetter';
import Footer from '@/components/Footer';
import MusicToggle from '@/components/MusicToggle';

function App() {
  return (
    <div className="min-h-screen bg-cream-100 text-ink-800">
      <Navbar />
      <main>
        <Hero />
        <Memories />
        <BirthdayCake />
        <GiftCards />
        <BirthdayQR />
        <BirthdayLetter />
      </main>
      <Footer />
      <MusicToggle />
    </div>
  );
}

export default App;
