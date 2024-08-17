/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customLight: '#E6E6E6',
        customLight2: '#FFFFFF',
        customDark: '#262626',
        customDark2: '#737373',
        customBlack: 'black',
        customWhite: 'white'
      },
    },
  },
  plugins: [],
}

