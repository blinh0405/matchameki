// Pair structure linking matcha drinks with cookies
export interface FlavorPair {
  id: string;
  matchaId: string;
  cookieId: string;
  matchaName: string;
  cookieName: string;
  personality: string[];
  description: string;
}

// The 6 pairs
export const flavorPairs: Record<string, FlavorPair> = {
  lemon: {
    id: 'lemon',
    matchaId: 'lemon',
    cookieId: 'lemon',
    matchaName: 'Lemon Curd Matcha',
    cookieName: 'Lemon Crinkle',
    personality: ['feisty', 'adventurous', 'spontaneous', 'energetic'],
    description: 'Bright, bold, and always ready for the next adventure. You bring excitement and zest to everything you do.'
  },
  ube: {
    id: 'ube',
    matchaId: 'ube',
    cookieId: 'ube',
    matchaName: 'Ube Matcha',
    cookieName: 'Ube Marble Cookie',
    personality: ['romantic', 'sweet', 'dreamy', 'heartfelt'],
    description: 'Deeply emotional and beautifully expressive. You see the world through a lens of love and meaning.'
  },
  protein: {
    id: 'protein',
    matchaId: 'protein',
    cookieId: 'protein',
    matchaName: 'Protein Matcha',
    cookieName: 'Classic Chocolate Chip Cookie',
    personality: ['structured', 'career-oriented', 'ambitious', 'disciplined'],
    description: 'Goal-driven and organized. You build success through dedication and smart planning.'
  },
  sesame: {
    id: 'sesame',
    matchaId: 'sesame',
    cookieId: 'sesame',
    matchaName: 'Black Sesame Matcha',
    cookieName: 'Sesame Matcha Cookie',
    personality: ['social', 'people person', 'warm', 'engaging'],
    description: 'Your energy comes from connection. You thrive in community and bring people together.'
  },
  pistachio: {
    id: 'pistachio',
    matchaId: 'pistachio',
    cookieId: 'pistachio',
    matchaName: 'Pistachio Matcha',
    cookieName: 'Dubai Chocolate Cookie',
    personality: ['classic', 'traveler', 'cultured', 'refined'],
    description: 'Sophisticated and worldly. You appreciate quality, culture, and timeless experiences.'
  },
  strawberry: {
    id: 'strawberry',
    matchaId: 'strawberry',
    cookieId: 'strawberry',
    matchaName: 'Strawberry Matcha',
    cookieName: 'Strawberry Matcha Cookie',
    personality: ['quiet', 'trustworthy', 'homebody', 'simple'],
    description: 'Grounded and genuine. You find beauty in simplicity and value deep, authentic connections.'
  }
};

export const getPairById = (id: string): FlavorPair | undefined => {
  return flavorPairs[id];
};

// Get the complement of a pair (for matching)
export const getComplementPair = (pairId: string): string | undefined => {
  const pairs: Record<string, string> = {
    lemon: 'lemon',
    ube: 'ube',
    protein: 'protein',
    sesame: 'sesame',
    pistachio: 'pistachio',
    strawberry: 'strawberry'
  };
  return pairs[pairId];
};
