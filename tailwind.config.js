/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    backgroundImage: {
      app: 'linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)',
    },
    gridTemplateRows: {
      layout: 'auto 1fr auto',
    },
  },
  plugins: [],
}
