export interface QuizOption {
  text: string;
  value: string;
  pair: 'lemon' | 'ube' | 'protein' | 'sesame' | 'pistachio' | 'strawberry';
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'How do you spend your ideal Saturday?',
    options: [
      { text: 'Trying a new hiking trail or spontaneous road trip', value: 'adventure', pair: 'lemon' },
      { text: 'Romantic brunch followed by a sunset walk', value: 'romantic', pair: 'ube' },
      { text: 'Productive morning workout, then tackling my to-do list', value: 'structured', pair: 'protein' },
      { text: 'Hosting a dinner party or meeting friends for drinks', value: 'social', pair: 'sesame' },
      { text: 'Exploring a new neighborhood or visiting an art gallery', value: 'classic', pair: 'pistachio' },
      { text: 'Cozy day at home with a good book and homemade food', value: 'homebody', pair: 'strawberry' }
    ]
  },
  {
    id: 'q2',
    question: 'What kind of vacation calls to you?',
    options: [
      { text: 'Backpacking through multiple cities, no strict itinerary', value: 'adventure', pair: 'lemon' },
      { text: 'Secluded beach resort with couples spa treatments', value: 'romantic', pair: 'ube' },
      { text: 'Well-planned trip with reservations and structured activities', value: 'structured', pair: 'protein' },
      { text: 'Group trip with friends, lots of nightlife and socializing', value: 'social', pair: 'sesame' },
      { text: 'Cultural immersion in European cities, museums and fine dining', value: 'classic', pair: 'pistachio' },
      { text: 'Quiet cabin in the woods or staycation at home', value: 'homebody', pair: 'strawberry' }
    ]
  },
  {
    id: 'q3',
    question: 'Your approach to trying new things:',
    options: [
      { text: 'Jump in headfirst! Life is short, take risks', value: 'adventure', pair: 'lemon' },
      { text: 'If it feels right and meaningful, I will give it a try', value: 'romantic', pair: 'ube' },
      { text: 'Research first, make a plan, then execute carefully', value: 'structured', pair: 'protein' },
      { text: 'More fun with friends! I will try anything if we are together', value: 'social', pair: 'sesame' },
      { text: 'I appreciate quality over novelty, but I am open-minded', value: 'classic', pair: 'pistachio' },
      { text: 'I prefer what I know works, but I will explore gently', value: 'homebody', pair: 'strawberry' }
    ]
  },
  {
    id: 'q4',
    question: 'At a party, you are most likely to:',
    options: [
      { text: 'Suggest a wild group activity or late-night adventure', value: 'adventure', pair: 'lemon' },
      { text: 'Have deep one-on-one conversations in a quiet corner', value: 'romantic', pair: 'ube' },
      { text: 'Network strategically and discuss career goals', value: 'structured', pair: 'protein' },
      { text: 'Work the room, meet everyone, be the social connector', value: 'social', pair: 'sesame' },
      { text: 'Engage in thoughtful discussions about travel or culture', value: 'classic', pair: 'pistachio' },
      { text: 'Honestly? I would rather be home, but I will chat with close friends', value: 'homebody', pair: 'strawberry' }
    ]
  },
  {
    id: 'q5',
    question: 'Your perfect evening includes:',
    options: [
      { text: 'Last-minute concert tickets or trying that new speakeasy', value: 'adventure', pair: 'lemon' },
      { text: 'Candlelit dinner at home with someone special', value: 'romantic', pair: 'ube' },
      { text: 'Gym session, meal prep, and planning tomorrow schedule', value: 'structured', pair: 'protein' },
      { text: 'Game night with a group or trivia at the local bar', value: 'social', pair: 'sesame' },
      { text: 'Wine tasting or dinner at a Michelin-star restaurant', value: 'classic', pair: 'pistachio' },
      { text: 'Movie marathon in pajamas with comfort food', value: 'homebody', pair: 'strawberry' }
    ]
  },
  {
    id: 'q6',
    question: 'When faced with a challenge, you:',
    options: [
      { text: 'Tackle it head-on with energy and confidence', value: 'adventure', pair: 'lemon' },
      { text: 'Process my feelings first, then respond with care', value: 'romantic', pair: 'ube' },
      { text: 'Create a step-by-step action plan and execute it', value: 'structured', pair: 'protein' },
      { text: 'Call friends for advice and support', value: 'social', pair: 'sesame' },
      { text: 'Reflect thoughtfully and draw on past experiences', value: 'classic', pair: 'pistachio' },
      { text: 'Take my time, stay calm, trust my instincts', value: 'homebody', pair: 'strawberry' }
    ]
  },
  {
    id: 'q7',
    question: 'Your ideal living space is:',
    options: [
      { text: 'Minimal and flexible, ready for spontaneous moves or travel', value: 'adventure', pair: 'lemon' },
      { text: 'Soft lighting, cozy textures, fresh flowers everywhere', value: 'romantic', pair: 'ube' },
      { text: 'Organized, functional, with a dedicated workspace', value: 'structured', pair: 'protein' },
      { text: 'Open layout perfect for hosting gatherings', value: 'social', pair: 'sesame' },
      { text: 'Curated decor with art, books, and elegant furniture', value: 'classic', pair: 'pistachio' },
      { text: 'Warm, inviting, filled with sentimental items and comfort', value: 'homebody', pair: 'strawberry' }
    ]
  },
  {
    id: 'q8',
    question: 'Your phone is full of photos of:',
    options: [
      { text: 'Adventures, concerts, random nights out with friends', value: 'adventure', pair: 'lemon' },
      { text: 'Sunsets, aesthetics, moments that made me feel something', value: 'romantic', pair: 'ube' },
      { text: 'Progress pics from the gym, meal prep, productivity screenshots', value: 'structured', pair: 'protein' },
      { text: 'Group photos, party memories, people I love', value: 'social', pair: 'sesame' },
      { text: 'Travel destinations, architecture, museum exhibits', value: 'classic', pair: 'pistachio' },
      { text: 'Home projects, pets, family moments, cozy vibes', value: 'homebody', pair: 'strawberry' }
    ]
  },
  {
    id: 'q9',
    question: 'How do you handle stress?',
    options: [
      { text: 'Go for a run, blast music, do something physically intense', value: 'adventure', pair: 'lemon' },
      { text: 'Journal my feelings, take a bath, light candles', value: 'romantic', pair: 'ube' },
      { text: 'Make a detailed plan to address the root cause', value: 'structured', pair: 'protein' },
      { text: 'Vent to friends, process out loud, seek connection', value: 'social', pair: 'sesame' },
      { text: 'Step back, gain perspective, maybe travel or visit a new place', value: 'classic', pair: 'pistachio' },
      { text: 'Retreat into my safe space, recharge alone with comfort activities', value: 'homebody', pair: 'strawberry' }
    ]
  },
  {
    id: 'q10',
    question: 'Your communication style is:',
    options: [
      { text: 'Direct, enthusiastic, sometimes impulsive', value: 'adventure', pair: 'lemon' },
      { text: 'Expressive, heartfelt, emotionally open', value: 'romantic', pair: 'ube' },
      { text: 'Clear, efficient, goal-oriented', value: 'structured', pair: 'protein' },
      { text: 'Warm, engaging, I love long conversations', value: 'social', pair: 'sesame' },
      { text: 'Thoughtful, articulate, I value meaningful dialogue', value: 'classic', pair: 'pistachio' },
      { text: 'Gentle, honest, I prefer one-on-one or small groups', value: 'homebody', pair: 'strawberry' }
    ]
  },
  {
    id: 'q11',
    question: 'What matters most to you in a relationship?',
    options: [
      { text: 'Chemistry, excitement, someone who matches my energy', value: 'adventure', pair: 'lemon' },
      { text: 'Deep emotional connection and vulnerability', value: 'romantic', pair: 'ube' },
      { text: 'Shared goals, mutual support for our ambitions', value: 'structured', pair: 'protein' },
      { text: 'Friendship first, someone who gets along with my people', value: 'social', pair: 'sesame' },
      { text: 'Intellectual compatibility and shared values', value: 'classic', pair: 'pistachio' },
      { text: 'Trust, loyalty, comfort, feeling at home with them', value: 'homebody', pair: 'strawberry' }
    ]
  },
  {
    id: 'q12',
    question: 'Five years from now, you see yourself:',
    options: [
      { text: 'Living abroad, still exploring, life full of stories', value: 'adventure', pair: 'lemon' },
      { text: 'Building a beautiful life with someone I love deeply', value: 'romantic', pair: 'ube' },
      { text: 'Thriving in my career, hitting major milestones', value: 'structured', pair: 'protein' },
      { text: 'Surrounded by a strong community and close friendships', value: 'social', pair: 'sesame' },
      { text: 'Well-traveled, cultured, living with intention and taste', value: 'classic', pair: 'pistachio' },
      { text: 'Settled, content, close to family, living simply and well', value: 'homebody', pair: 'strawberry' }
    ]
  }
];
