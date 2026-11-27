import view from '../images/seri.PNG';
import bdy from '../images/bdy.PNG';
import news from '../images/new.PNG';
export const birthday = {
  friendName: 'karthika',
  age: 26,
  // Month is 1-based (1 = January). Used for the countdown to the next birthday.
  birthdate: { month: 12, day: 13 },
  greeting: 'Happy Birthday',
  tagline: 'A little corner of the internet made just for you.',
  letter: {
    salutation: 'Happy Birthday, Beautiful! 💗🎂🦋',
    paragraphs: [
      "I don't know whether you realise how special you are, but honestly, you bring a different kind of happiness whenever I talk to you. 🥹💗",
      "Un smile eppovume ippadiye irukkanum. Un dreams ellam nijamaaganum. Life-la nee expect panra ella happiness-um unakku kidaikkanum.",
      "I may not be the most special person in your life, but you're definitely someone special in mine. 💗",
    ],
    signature: 'Keep smiling, stay happy and enjoy your day, princess! 👑✨',
  },
  gifts: {
    wishes:
      'Indha pictures la evlo happy ah irukkiyo🫶🏻, adhe maari un life full ahh happy ahh iru💫🦋.indha memories ellame eppovume special ahh irukum💐.wish you many more happy returns of the day🎂🎉. ',
    memories:
      'Every inside joke, late-night conversation, and tiny moment we shared has stayed with me. You are part of my favourite memories.',
    secret:
      "I don't know how to explain this feeling, but whenever I talk to you, I feel happy.Thank you for time 💗✨",
  },
  
  memories:[
    {
      image: view,
      caption: 'You look absolutely gorgeous in a saree!💗🥰',
      alt: 'sari look',
    },
    {
     
      image: news,
      caption: 'New year, new beginnings, and a cake to celebrate it!💗🎂',
      alt: 'Friends celebrating a birthday with a candle-lit cake',
    },
    {
      image: bdy,
      caption: 'your last year birthday pictures!🎉',
      alt: 'Women laughing together on a sunny day outdoors',
    },
  ],
  socialLinks: {
    instagram: '',
    email: '',
  },
};
