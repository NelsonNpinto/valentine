# Will You Be My Valentine? 💝

A beautiful, interactive Valentine's Day web application built with React and Bun, fully responsive for both iPhone 13 Pro and web browsers.

## Features

- 🎨 Beautiful Valentine's themed UI
- 🎡 Interactive spin wheel game with animations
- 💌 Romantic letter reveal experience
- 🎫 Collectible coupons system
- 📱 **Fully responsive** - Optimized for iPhone 13 Pro (390x844px) and web
- ✨ Smooth animations and transitions
- ⚡ Built with Bun and Vite for blazing fast performance
- 🎯 Touch-optimized for mobile devices

## Tech Stack

- **Runtime**: Bun
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: CSS-in-JS with responsive design

## Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh) installed:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

```bash
bun install
```

### Running the App

```bash
bun run dev
```

The app will open at [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## User Flow

1. **Splash Screen** - Welcome animation with love lock icon
2. **Question** - "Will you be my Valentine?" with Yes/No buttons
3. **Message Yes** - Congratulations message leading to spin wheel
4. **Message No** - Playful "Valentine Plus" subscription offer
5. **Spin Wheel** - Interactive wheel with 3 spins to win coupons
6. **Coupons** - Display won coupons (Free Hugs, Kisses, Cuddles)
7. **Letter Closed** - Envelope waiting to be opened
8. **Letter Open** - Romantic letter with photos

## Customization

### Editing the Letter

Edit the letter content in `src/screens/LetterOpen.js`:

```javascript
// Find the letter text section and customize:
My Love,

From the moment you opened this prototype...
```

### Changing Names

Update the photo strip names in `src/screens/LetterOpen.js`:

```javascript
Khant & San
Valentine's 2025
```

### Adding Your Photos

Replace the placeholder photo sections in `LetterOpen.js` with your own images:

```javascript
// Replace the gray placeholder divs with your image URLs
<img src="your-photo-url.jpg" alt="" />
```

## Tech Stack

- React 18
- React Router v6
- CSS-in-JS (inline styles)
- Google Fonts (Fredoka One, Poppins, Montserrat)

## Responsive Design

The app automatically adapts to different screen sizes:

### Mobile (iPhone 13 Pro)
- **Viewport**: 390x844px
- Full-screen experience
- Touch-optimized interactions
- No border radius for immersive feel

### Tablet
- **Viewport**: 768px+
- Rounded corners (40px border radius)
- Centered container with shadow

### Desktop
- **Viewport**: 1024px+
- Beautiful gradient background
- iPhone-sized container (390x844px)
- Elevated card design with shadows

## Browser Support

Optimized for:
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile
- ✅ Chrome Desktop
- ✅ Firefox
- ✅ Safari Desktop
- ✅ Edge

## License

Personal use only. Created with love! ❤️
