export interface FlavorPersonality {
  id: string;
  name: string;
  shortName: string;
  description: string;
  traits: string[];
  color: string;
  gradient: string;
  image: string;
  cookieImage: string;
}

export const flavorPersonalities: Record<string, FlavorPersonality> = {
  strawberry: {
    id: 'strawberry',
    name: 'Strawberry Matcha Cookie',
    shortName: 'Strawberry Matcha Cookie',
    description: 'You are a delightful blend of playfulness and earthy calm. Sweet but grounded, you balance joy with authenticity. Your creative spirit and gentle warmth make people feel instantly at ease, like finding the perfect cafe on a rainy afternoon.',
    traits: ['playful', 'creative', 'warm', 'balanced'],
    color: '#F4B6C2',
    gradient: 'linear-gradient(135deg, #7FAF8C 0%, #F4B6C2 100%)',
    image: '/images/Strawberry_Matcha.jpg',
    cookieImage: '/images/strawberrymatchacookies.jpg'
  },
  lemon: {
    id: 'lemon',
    name: 'Lemon Crinkle',
    shortName: 'Lemon Crinkle',
    description: 'Bright, refreshing, and wonderfully uplifting. You bring a spark of optimism and clarity to every interaction. Like sunshine through a window, your presence lightens the mood while staying genuine and grounded.',
    traits: ['bright', 'optimistic', 'refreshing', 'clear'],
    color: '#F4E8A8',
    gradient: 'linear-gradient(135deg, #F4E8A8 0%, #E8D77C 100%)',
    image: '/images/Lemon_Curd_Matcha.jpg',
    cookieImage: '/images/lemon_cookies.jpg'
  },
  pistachio: {
    id: 'pistachio',
    name: 'Dubai Chocolate Cookie',
    shortName: 'Dubai Chocolate Cookie',
    description: 'Luxurious, thoughtful, and unexpectedly delightful. You appreciate quality and are not afraid to be different. Like the perfect blend of pistachio and rich chocolate, you balance sophistication with approachability, depth with sweetness.',
    traits: ['sophisticated', 'unique', 'thoughtful', 'refined'],
    color: '#A8C69F',
    gradient: 'linear-gradient(135deg, #A8C69F 0%, #8B7355 100%)',
    image: '/images/Pistachio_Matcha.jpg',
    cookieImage: '/images/dubai-chocolate-cookies-.jpg'
  },
  ube: {
    id: 'ube',
    name: 'Ube Marble Cookie',
    shortName: 'Ube Marble Cookie',
    description: 'Dreamy, creative, and beautifully layered. You see the world through a unique lens and are not afraid to stand out. Like the mesmerizing swirl of purple and cream, you bring color and imagination to everyday moments.',
    traits: ['dreamy', 'artistic', 'unique', 'gentle'],
    color: '#B89AC4',
    gradient: 'linear-gradient(135deg, #B89AC4 0%, #E8D5B7 100%)',
    image: '/images/Ube_Matcha.jpg',
    cookieImage: '/images/ube_cookies.jpg'
  },
  sesame: {
    id: 'sesame',
    name: 'Sesame Matcha Cookie',
    shortName: 'Sesame Matcha Cookie',
    description: 'Complex, intriguing, and deeply authentic. You value substance over surface and are not afraid of nuance. Like the marbled layers of black sesame and matcha, you embrace both light and shadow, finding beauty in the balance.',
    traits: ['introspective', 'authentic', 'complex', 'grounded'],
    color: '#6B7F6E',
    gradient: 'linear-gradient(135deg, #6B7F6E 0%, #4A4A4A 100%)',
    image: '/images/Black_Sesame_Matcha.jpg',
    cookieImage: '/images/Black_Sesame_cookie.jpg'
  },
  protein: {
    id: 'protein',
    name: 'Classic Chocolate Chip Cookie',
    shortName: 'Classic Chocolate Chip Cookie',
    description: 'Energetic, dependable, and effortlessly genuine. You are the friend who shows up, follows through, and brings good vibes. Like a classic chocolate chip cookie, you are familiar yet always welcome, comforting, reliable, and never boring.',
    traits: ['energetic', 'reliable', 'friendly', 'genuine'],
    color: '#C9A875',
    gradient: 'linear-gradient(135deg, #C9A875 0%, #8B6F47 100%)',
    image: '/images/Protein_Matcha.jpg',
    cookieImage: '/images/chocolate_chips_cookie.jpg'
  }
};

export const getFlavorById = (id: string): FlavorPersonality | undefined => {
  return flavorPersonalities[id];
};
