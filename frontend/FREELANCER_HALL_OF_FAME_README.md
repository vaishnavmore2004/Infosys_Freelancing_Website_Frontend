# Freelancer Hall of Fame Component

## Overview
A beautiful React component that displays the Top Freelancers of the Year with a podium layout, leaderboard, and interactive certificate viewing system.

## Features

### 🏆 Podium Section (Top 3)
- **1st Place**: Centered with gold glowing frame and larger profile
- **2nd Place**: Left side with silver frame
- **3rd Place**: Right side with bronze frame
- Smooth Framer Motion animations with fade-up effects
- Hover animations with scale and glow effects

### 📊 Leaderboard (4th–10th)
- Clean, alternating row backgrounds
- Profile pictures, names, and project counts
- "View Certificate" buttons for each freelancer
- Staggered slide-in animations

### 🎓 Certificate Modal
- Beautiful certificate design with gold/cream theme
- Freelancer profile picture and details
- Certificate text and decorative border
- Download and Close buttons
- Smooth scale + fade-in animations

### ⚙️ Criteria Modal
- Ranking criteria explanation
- Clean, informative layout
- Smooth animations

## Styling Theme
- **Background**: `linear-gradient(135deg, #38124A, #000000)`
- **Accent Colors**: 
  - `#EC4186` (pink)
  - `#EE544A` (orange-pink gradient)
  - `#FFFFFF` (text)
- **Font**: Poppins
- **Effects**: Glowing borders, soft shadows, hover animations, gradient buttons

## Usage

### 1. Install Dependencies
```bash
npm install framer-motion
```

### 2. Import and Use
```jsx
import FreelancerHallOfFame from './components/FreelancerHallOfFame';

function App() {
  return (
    <div>
      <FreelancerHallOfFame />
    </div>
  );
}
```

### 3. Access the Component
Navigate to `/hall-of-fame` in your React app.

## Component Structure

```
FreelancerHallOfFame.jsx
├── Header with glowing title
├── Podium Section (Top 3)
│   ├── 1st Place (Gold)
│   ├── 2nd Place (Silver)
│   └── 3rd Place (Bronze)
├── View Criteria Button
├── Leaderboard (4th-10th)
├── Certificate Modal
└── Criteria Modal
```

## Static Data
The component uses static placeholder data:
- Top 3 freelancers with profile images
- Additional 7 freelancers for the leaderboard
- All using the TalentLoop logo as placeholder images

## Responsive Design
- **Desktop**: Full podium layout with side-by-side positioning
- **Tablet**: Adjusted spacing and sizing
- **Mobile**: Stacked podium layout, simplified leaderboard rows

## Animation Details
- **Podium**: Fade-up animations with staggered delays
- **Leaderboard**: Slide-up animations with rank-based delays
- **Modals**: Scale + fade-in/out animations
- **Hover Effects**: Scale, glow, and shadow enhancements

## Customization
To modify the data, update the arrays in the component:
```jsx
const topFreelancers = [
  { rank: 1, name: "Your Name", projects: 42, image: "/path/to/image.png" },
  // ...
];
```

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Framer Motion requires React 16.8+ (hooks)

## Performance
- Optimized animations with GPU acceleration
- Efficient re-renders with React hooks
- Responsive images and lazy loading ready
