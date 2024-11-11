/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#9F7AEA',    // Bright lilac
          DEFAULT: '#805AD5',  // Rich purple
          dark: '#553C9A',     // Deep purple
        },
        secondary: {
          light: '#E9D8FD',    // Soft lilac
          DEFAULT: '#D6BCFA',  // Muted lilac
          dark: '#44337A',     // Dark purple
        },
        background: {
          light: '#FAF5FF',    // Very light purple tint
          dark: '#1A1626',     // Deep purple-black
        },
        text: {
          light: '#2D3748',    // Dark gray with slight purple undertone
          dark: '#D4D4D4',     // Off-white
        },
        card: {
          light: '#FFFFFF',    // White for light mode
          dark: '#D4D4D4',     // Gray-300 for dark mode
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}