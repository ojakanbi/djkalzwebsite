/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#840920', // Deep red from logo
          dark: '#6B0719',    // Darker shade for hover states
          light: '#A10B28',   // Lighter shade for accents
          glow: '#840920',    // Glow effect color
        },
        neon: {
          pink: '#840920',    // Using logo red
          magenta: '#A10B28', // Lighter variant
          hot: '#C20F31',     // Brightest variant
        },
        dark: {
          DEFAULT: '#000000', // Pure black background
          card: '#0a0a0a',    // Slightly off-black for cards
          lighter: '#1a1a1a', // Lighter black for contrast
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(132, 9, 32, 0.5)',      // Red glow
        'neon-lg': '0 0 40px rgba(132, 9, 32, 0.6)',   // Stronger red glow
      },
    },
  },
  plugins: [],
}