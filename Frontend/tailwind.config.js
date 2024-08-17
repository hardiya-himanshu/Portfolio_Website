/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: {
          light: '#3A7CA5',
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
        customGreen: '#10B981',
      },
    },
  },
  plugins: [],
}

