/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0d473b',
          darkTeal: '#0a362d',
          accent: '#84cc16', // The yellowish green accent
          lightTeal: '#e0f2fe',
        }
      }
    },
  },
  plugins: [],
}