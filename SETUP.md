# Setup Guide

Complete setup instructions for Brew & Bites Social.

## Quick Start (5 minutes)

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. That's it! 🎉

The app should now be running. No database setup, no environment variables, no API keys needed.

---

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint

---

## Customizing the App

### Adding New Quiz Questions

Edit `data/quizData.ts`:

```typescript
{
  id: 'q9',
  question: 'Your question here?',
  options: [
    {
      text: 'Option text',
      value: 'option_value',
      weight: { zen: 3, strawberry: 2 } // Adjust weights
    }
  ]
}
```

### Adding New Flavors

Edit `data/flavorData.ts`:

```typescript
newFlavor: {
  id: 'newFlavor',
  name: 'New Flavor Name',
  shortName: 'Short Name',
  description: 'Personality description',
  traits: ['trait1', 'trait2', 'trait3'],
  color: '#hexcode',
  gradient: 'linear-gradient(...)'
}
```

### Adding New Mock Users

Edit `data/userData.ts`:

```typescript
{
  id: 'u13',
  name: 'User Name',
  flavorId: 'zen',
  bio: 'User bio here...',
  interests: ['interest1', 'interest2', 'interest3']
}
```

### Customizing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  matcha: {
    light: '#YourColor',
    deep: '#YourColor',
  },
  // ... more colors
}
```

---

## Project Architecture

### Data Flow

1. User takes quiz → answers stored in component state
2. Quiz completes → flavor calculated based on weighted scores
3. Result saved to localStorage
4. Matches generated based on compatibility matrix
5. User views profiles → data pulled from mock user array

### Component Hierarchy

```
App
├── Landing Page (/)
├── Quiz Page (/quiz)
├── Result Page (/result)
│   └── MatchCard (×3)
└── Profile Page (/profile/[id])
    └── MessageModal
```

### State Management

- **Local State**: Quiz answers, modal open/close
- **localStorage**: Quiz results, sent messages
- **URL Params**: User IDs, message modal triggers

---

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy (automatic settings detection)

### Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Static Export (Optional)

For static hosting (GitHub Pages, etc.):

1. Add to `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

2. Build:
```bash
npm run build
```

3. Deploy the `out` folder

---

## Common Issues

### Fonts not loading
Make sure you're connected to the internet. Fonts are loaded from Google Fonts CDN.

### localStorage errors in development
This is normal when using Server Components. The app checks for `typeof window !== 'undefined'` before accessing localStorage.

### Animation performance issues
Reduce `motion` values in components or disable animations by removing Framer Motion props.

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 14+, Chrome Android

---

## Performance Tips

- Images are not used in this build (keeps it fast)
- Animations use CSS transforms (GPU accelerated)
- No heavy dependencies
- LocalStorage only (no network calls)
- Code splitting via Next.js App Router

---

## Questions?

This is a portfolio/demo project. Feel free to modify, extend, or completely rebuild it for your needs!
