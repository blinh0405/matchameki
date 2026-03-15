# Brew & Bites Social

A quiet, indie-style social matching web app where users discover their flavor personality and connect with compatible people. Built as a polished portfolio piece showcasing modern frontend design and development.

![Brew & Bites Social](https://img.shields.io/badge/Next.js-14-black) ![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## 🎨 Concept

Users take a personality quiz and receive a matcha or cookie flavor identity. The app then suggests compatible matches based on complementary flavor profiles. The entire aesthetic is inspired by indie cafés, handmade bakery brands, and bedroom pop visuals—soft, calm, and deliberately anti-corporate.

## ✨ Features

- **Personality Quiz**: 8 thoughtfully crafted questions that calculate your flavor identity
- **6 Unique Flavors**: Zen Matcha, Strawberry Matcha Cookie, Dark Chocolate Matcha, Honey Butter Cookie, Vanilla Cloud Cookie, and Yuzu Matcha
- **Smart Matching**: Compatibility algorithm that pairs users with complementary flavor personalities
- **Profile System**: Detailed user profiles with bios, interests, and compatibility explanations
- **Message Modal**: Simple first-message interface (mock implementation)
- **Smooth Animations**: Framer Motion for gentle, purposeful transitions
- **Local Persistence**: Quiz results saved to localStorage

## 🎨 Design Philosophy

### Color Palette
- **Matcha Green**: `#7FAF8C` (primary)
- **Deep Matcha**: `#5F8F70`
- **Soft Pink**: `#F4B6C2`
- **Dusty Rose**: `#E8A4B8`
- **Cream Background**: `#FFF7F5`
- **Cookie Brown**: `#B48A78`
- **Dark Text**: `#2E2E2E`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Aesthetic Goals
✅ Soft, calm, café-inspired  
✅ Indie aesthetic (avoiding AI-generic patterns)  
✅ Minimal but warm  
✅ Generous spacing and rounded corners  
✅ Subtle gradients and soft shadows  
❌ No harsh blacks or bright neons  
❌ No emoji overload  
❌ No corporate tech vibes  

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **State**: React hooks + localStorage

## 📁 Project Structure

```
brew-and-bites-social/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── MatchCard.tsx
│   │   └── MessageModal.tsx
│   ├── profile/
│   │   └── [id]/
│   │       └── page.tsx     # Dynamic profile page
│   ├── quiz/
│   │   └── page.tsx         # Quiz interface
│   ├── result/
│   │   └── page.tsx         # Results with matches
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── data/
│   ├── quizData.ts          # Quiz questions
│   ├── flavorData.ts        # Flavor personalities
│   └── userData.ts          # Mock user profiles
├── utils/
│   ├── matching.ts          # Compatibility algorithm
│   └── quizLogic.ts         # Quiz calculation
├── public/                  # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**
```bash
cd brew-and-bites-social
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 🧪 How It Works

### Quiz Logic
The quiz uses a weighted scoring system:
- Each answer option contributes points to multiple flavor categories
- The flavor with the highest total score becomes the user's identity
- Results are stored in localStorage for persistence

### Matching Algorithm
1. Each flavor has a predefined list of compatible flavors
2. Compatibility scores are generated (88-96% for good matches)
3. Custom compatibility reasons explain why two flavors work together
4. The app randomly selects 3 compatible matches from the mock user pool

### Mock Data
All users, profiles, and messages are simulated:
- 12 pre-written user profiles
- No backend or database required
- Messages saved only to localStorage
- Perfect for portfolio demonstrations

## 📱 Pages Overview

### Landing Page (`/`)
- Minimalist hero section
- Animated gradient background
- Single CTA: "Take the flavor quiz"

### Quiz Page (`/quiz`)
- 8 questions with smooth card transitions
- Progress bar at top
- Back navigation supported
- Auto-advances on selection

### Result Page (`/result`)
- Large flavor personality card
- Trait badges
- 3 suggested matches with compatibility scores
- Option to retake quiz

### Profile Page (`/profile/[id]`)
- Full user bio and interests
- Compatibility explanation
- Send message button
- Back navigation

## 🎯 Portfolio Highlights

This project demonstrates:

✅ **Modern React Patterns**: App Router, Server/Client Components, hooks  
✅ **TypeScript Proficiency**: Proper typing throughout  
✅ **Animation Expertise**: Framer Motion for smooth, purposeful motion  
✅ **Design Sensibility**: Cohesive aesthetic with attention to detail  
✅ **State Management**: Local state + localStorage for persistence  
✅ **Routing**: Dynamic routes with Next.js  
✅ **Component Architecture**: Reusable, well-structured components  
✅ **No Backend Required**: Fully client-side, easy to deploy  

## 🎨 Design Decisions

**Why no backend?**  
This is a portfolio piece focused on frontend excellence. Mock data keeps it lightweight and deployable anywhere.

**Why these specific flavors?**  
Each flavor represents a distinct personality archetype while maintaining the café/bakery theme. They're memorable and visually distinctive.

**Why Framer Motion?**  
The animations are subtle and purposeful—not flashy. Framer Motion allows for spring physics and gesture-based interactions that feel natural.

**Why Tailwind?**  
Rapid styling with custom design tokens. The utility-first approach keeps the CSS maintainable while allowing creative freedom.

## 🚢 Deployment

This app can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages** (with static export)

No environment variables or backend configuration needed!

## 🔮 Future Enhancements

If expanding beyond a portfolio piece:
- Real authentication (NextAuth, Clerk)
- Database integration (Supabase, PlanetScale)
- Real-time messaging (Socket.io, Ably)
- Image uploads for profiles
- More quiz questions and flavors
- Email notifications
- Mobile app version (React Native)

## 📝 License

This project is open source and available for portfolio use. Feel free to fork, modify, and use in your own projects.

## 🙏 Credits

**Design Inspiration:**
- Indie café aesthetics
- Matcha culture
- Handmade bakery branding
- Bedroom pop visual language

**Built by:** A developer who believes the web should be beautiful, calm, and human.

---

*Find your flavor. Connect with your people.*
