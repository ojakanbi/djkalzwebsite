# DJ Kalz Official Website 🎵

A modern, neon-themed DJ portfolio website built with React, Tailwind CSS, and Framer Motion. Features black background with neon pink/magenta accents matching the DJ Kalz brand.

## 🎨 Brand Colors

The site uses the exact colors from your logo:
- **Primary (Neon Pink)**: #FF0080
- **Neon Magenta**: #E91E63
- **Neon Hot Pink**: #FF1493
- **Background**: Pure Black (#000000)

## 🚀 Quick Start

### Install Dependencies
```bash
cd dj-kalz-website
npm install
```

### Run Development Server
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 📸 Adding Your DJ Photo

### Step 1: Add Photo to Project
1. Place your DJ photo in: `/public/assets/images/`
2. Name it: `dj-photo.jpg` (or `.png`)

### Step 2: Update Home Page
Open `/src/pages/Home.jsx` and find line ~90:

**Replace this placeholder:**
```jsx
<div className="aspect-square bg-gradient-to-br from-dark-lighter to-dark flex items-center justify-center">
  {/* Placeholder content */}
</div>
```

**With this:**
```jsx
<img 
  src="/assets/images/dj-photo.jpg" 
  alt="DJ Kalz" 
  className="w-full h-full object-cover"
/>
```

The photo will automatically have the neon glow border effect! ✨

## 📁 Project Structure

```
dj-kalz-website/
├── public/
│   └── assets/
│       ├── logos/
│       │   └── djkalu-logo.png    ← Your logo (already added!)
│       ├── images/                ← ADD YOUR DJ PHOTO HERE
│       └── videos/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx               ← Photo section is here
│   │   ├── Bio.jsx
│   │   ├── Gallery.jsx
│   │   ├── Music.jsx
│   │   ├── Events.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── index.css              ← Neon glow effects
│   └── App.jsx
└── package.json
```

## 🎨 Customization Guide

### 1. Update Contact Info
**File**: `src/pages/Contact.jsx` (line ~31)

```javascript
const contactInfo = [
  {
    icon: Mail,
    value: 'YOUR_EMAIL@domain.com',      // ← Change this
    link: 'mailto:YOUR_EMAIL@domain.com',
  },
  {
    icon: Phone,
    value: '+1 (555) YOUR-NUMBER',       // ← Change this
    link: 'tel:+15555551234',
  },
  // ...
];
```

### 2. Update Social Links
**File**: `src/components/Footer.jsx` (line ~7)

```javascript
const socialLinks = [
  { 
    icon: Instagram, 
    url: 'https://instagram.com/YOUR_HANDLE',  // ← Change this
    label: 'Instagram' 
  },
  { 
    icon: Facebook, 
    url: 'https://facebook.com/YOUR_PAGE',     // ← Change this
    label: 'Facebook' 
  },
  // ...
];
```

### 3. Add Gallery Photos
1. Place photos in `/public/assets/images/gallery/`
2. Update `src/pages/Gallery.jsx` to reference them

### 4. Embed Music/Mixes
**File**: `src/pages/Music.jsx`

Add SoundCloud embed:
```jsx
<iframe 
  width="100%" 
  height="166" 
  scrolling="no" 
  frameborder="no" 
  src="https://w.soundcloud.com/player/?url=YOUR_TRACK_URL"
></iframe>
```

### 5. Update Events
**File**: `src/pages/Events.jsx` (line ~6)

```javascript
const upcomingEvents = [
  {
    title: 'Your Event Name',
    date: 'March 15, 2026',
    time: '9:00 PM - 2:00 AM',
    venue: 'Venue Name',
    city: 'City, State',
    type: 'Event Type',
    ticketUrl: 'https://tickets.com/your-event',
  },
  // Add more events...
];
```

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Name it: `dj-kalz-website` (must match `base` in `vite.config.js`)
3. Public repository
4. Don't initialize with README

### Step 2: Update vite.config.js
Make sure line 6 matches your repo name:
```javascript
base: '/dj-kalz-website/', // Must match your GitHub repo name
```

### Step 3: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: DJ Kalz neon website"
git remote add origin https://github.com/YOUR_USERNAME/dj-kalz-website.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy
```bash
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to repo Settings → Pages
2. Source: `gh-pages` branch
3. Click Save

Site will be live at: `https://YOUR_USERNAME.github.io/dj-kalz-website/`

## 🎨 Design Features

- ✨ Neon pink/magenta glow effects
- 🌑 Pure black background
- 💫 Smooth animations
- 📱 Fully responsive
- 🎯 Logo perfectly integrated
- ⚡ Fast loading with Vite

## 🎵 Pages Included

1. **Home** - Hero with logo, DJ photo section, features, CTA
2. **Bio** - About section, stats, expertise
3. **Gallery** - Filterable photo gallery with categories
4. **Music** - Mix embeds, streaming platform links
5. **Events** - Upcoming events calendar
6. **Contact** - Professional booking form

## 🛠️ Tech Stack

- React 18
- Vite (lightning fast!)
- Tailwind CSS (with custom neon colors)
- Framer Motion (smooth animations)
- React Router
- Lucide React (icons)

## 💡 Tips

1. **Optimize Images**: Use WebP format, compress to <500KB
2. **Logo is already included**: It's in `/public/assets/logos/djkalu-logo.png`
3. **Test mobile**: Run `npm run dev` and check on phone
4. **Update regularly**: Fresh content = more bookings

## 📞 Support

Check out:
- React Docs: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/
- Framer Motion: https://www.framer.com/motion/

## ✅ Checklist

Before deploying:
- [ ] npm install completed
- [ ] Site runs locally
- [ ] DJ photo added
- [ ] Contact info updated
- [ ] Social links updated
- [ ] At least 3-6 gallery photos
- [ ] 2-3 mixes embedded
- [ ] Events updated
- [ ] Tested on mobile
- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled

---

**Built with ❤️ and neon vibes for DJ Kalz**
