/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color': "#03346E",
        'sub-text': "#E2E2B6",
        'buttons': "#03346E"
      },
      fontSize: {
        'priority-size': "10.052rem",
      },
      fontWeight: {
        'priority-font': '700',
      },
      
    },
  },
  plugins: [],
}