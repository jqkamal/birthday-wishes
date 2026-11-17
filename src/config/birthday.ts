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
    salutation: 'My dearest karthika,',
    paragraphs: [
      'Another year of you, and the world is a little more beautiful for it. I still remember the small moments we shared that felt like nothing at the time and now feel like treasures.',
      'I hope this birthday is soft and golden. I hope you eat too much cake, laugh until your cheeks hurt, and finally take the rest you deserve.',
      'Thank you for being exactly who you are. Here is to the year ahead, and to all the adventures we have yet to plan together.',
    ],
    signature: 'With all my love, always',
  },
  gifts: {
    wishes:
      'May your coffee be hot, your plans go smoothly, and your heart feel as full as it makes everyone else feel.',
    memories:
      'Every inside joke, late-night conversation, and tiny moment we shared has stayed with me. You are part of my favourite memories.',
    secret:
      'Pack your bags, because the next adventure is already planned. Keep this weekend free and trust me.',
  },
  memories: [
    {
      image: view,
      caption: 'You look absolutely gorgeous in a saree!', emoji:'🥰',
      alt: 'sari look',
    },
    {
     
      image: news,
      caption: 'Candlelit nights and sweet cake',
      alt: 'Friends celebrating a birthday with a candle-lit cake',
    },
    {
      image: bdy,
      caption: 'Sunny days and easy company',
      alt: 'Women laughing together on a sunny day outdoors',
    },
  ],
  socialLinks: {
    instagram: '@dreamy_girl_kp',
    email: '',
  },
};
