export interface User {
  id: string;
  name: string;
  flavorId: string;
  type: 'matcha' | 'cookie';
  bio: string;
  interests: string[];
  age?: number;
}

export const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'Emma',
    flavorId: 'strawberry',
    type: 'cookie',
    bio: 'I spend my weekends at small art galleries and cozy cafes, sketching in my journal. Looking for someone who appreciates the quiet beauty in everyday moments.',
    interests: ['journaling', 'art cafes', 'baking', 'indie music']
  },
  {
    id: 'u2',
    name: 'Mia',
    flavorId: 'lemon',
    type: 'matcha',
    bio: 'Morning person with a bright outlook on life. I love sunrise yoga, fresh flowers, and finding the silver lining in everything.',
    interests: ['yoga', 'photography', 'gardening', 'sunrise walks']
  },
  {
    id: 'u3',
    name: 'Oliver',
    flavorId: 'pistachio',
    type: 'cookie',
    bio: 'Coffee connoisseur and design enthusiast. I appreciate quality over quantity and believe the best things in life are worth savoring slowly.',
    interests: ['specialty coffee', 'interior design', 'architecture', 'vinyl collecting']
  },
  {
    id: 'u4',
    name: 'Luna',
    flavorId: 'ube',
    type: 'cookie',
    bio: 'Artist and daydreamer. I paint cloudy skies, collect vintage cameras, and believe magic exists in ordinary moments.',
    interests: ['watercolor painting', 'vintage cameras', 'stargazing', 'poetry']
  },
  {
    id: 'u5',
    name: 'Kai',
    flavorId: 'sesame',
    type: 'matcha',
    bio: 'Writer who thinks deeply about small things. I love quiet bookshops, black coffee, and conversations that last until 2 AM.',
    interests: ['writing', 'philosophy', 'jazz music', 'late-night walks']
  },
  {
    id: 'u6',
    name: 'Zoe',
    flavorId: 'protein',
    type: 'matcha',
    bio: 'Gym buddy, loyal friend, and eternal optimist. I am all about good vibes, great playlists, and making things happen.',
    interests: ['fitness', 'hiking', 'cooking healthy', 'motivational podcasts']
  },
  {
    id: 'u7',
    name: 'Sophie',
    flavorId: 'strawberry',
    type: 'matcha',
    bio: 'Baker and craft enthusiast. I make everything from scratch and believe the best gifts are homemade.',
    interests: ['baking', 'pottery', 'farmers markets', 'handmade crafts']
  },
  {
    id: 'u8',
    name: 'Leo',
    flavorId: 'lemon',
    type: 'cookie',
    bio: 'Adventure seeker with a sunshine disposition. Always up for trying something new or exploring somewhere I have never been.',
    interests: ['travel', 'food adventures', 'beach days', 'language learning']
  },
  {
    id: 'u9',
    name: 'Aria',
    flavorId: 'pistachio',
    type: 'matcha',
    bio: 'Curator of beautiful things. I love museums, antique shops, and anything with a good story behind it.',
    interests: ['museum hopping', 'antique collecting', 'art history', 'classical music']
  },
  {
    id: 'u10',
    name: 'Iris',
    flavorId: 'ube',
    type: 'cookie',
    bio: 'Digital artist and anime enthusiast. I create dreamy illustrations and believe in finding your own aesthetic.',
    interests: ['digital art', 'anime', 'bubble tea', 'kawaii culture']
  },
  {
    id: 'u11',
    name: 'Noah',
    flavorId: 'sesame',
    type: 'cookie',
    bio: 'Philosopher at heart, photographer by passion. I am drawn to shadows, textures, and the stories nobody tells.',
    interests: ['film photography', 'philosophy', 'minimalism', 'documentary films']
  },
  {
    id: 'u12',
    name: 'Riley',
    flavorId: 'protein',
    type: 'cookie',
    bio: 'Morning runner, weekend warrior, and your most reliable friend. I show up, follow through, and bring snacks.',
    interests: ['running', 'meal prep', 'outdoor sports', 'team activities']
  },
  {
    id: 'u13',
    name: 'Ava',
    flavorId: 'ube',
    type: 'matcha',
    bio: 'Hopeless romantic who writes love letters and believes in soulmates. I cry at rom-coms and see beauty everywhere.',
    interests: ['poetry', 'romantic films', 'sunset photography', 'writing']
  },
  {
    id: 'u14',
    name: 'Maya',
    flavorId: 'ube',
    type: 'matcha',
    bio: 'Dreamer with my head in the clouds. I collect pressed flowers, make playlists for every mood, and believe in magic.',
    interests: ['journaling', 'cottagecore', 'floral arranging', 'slow living']
  },
  {
    id: 'u15',
    name: 'Sophie',
    flavorId: 'lemon',
    type: 'matcha',
    bio: 'Full of energy and ready for adventure! I wake up excited about life and spread positivity everywhere I go.',
    interests: ['dance', 'festivals', 'spontaneous trips', 'making friends']
  },
  {
    id: 'u16',
    name: 'Ethan',
    flavorId: 'protein',
    type: 'cookie',
    bio: 'Goal-oriented and always improving. I track my habits, optimize my routine, and love helping friends reach their goals.',
    interests: ['productivity', 'self-improvement', 'health', 'coaching']
  },
  {
    id: 'u17',
    name: 'Chloe',
    flavorId: 'strawberry',
    type: 'cookie',
    bio: 'Quiet soul who finds joy in simple things. I love rainy days, warm tea, and genuine conversations with close friends.',
    interests: ['knitting', 'cozy cafes', 'books', 'nature walks']
  },
  {
    id: 'u18',
    name: 'James',
    flavorId: 'sesame',
    type: 'matcha',
    bio: 'Deep thinker who loves meaningful conversations. I ask the big questions and appreciate people who do the same.',
    interests: ['philosophy', 'meditation', 'deep talks', 'tea ceremonies']
  }
];

export const getUserById = (id: string): User | undefined => {
  return mockUsers.find(user => user.id === id);
};

export const getUsersByFlavorId = (flavorId: string): User[] => {
  return mockUsers.filter(user => user.flavorId === flavorId);
};
