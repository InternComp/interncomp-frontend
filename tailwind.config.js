/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs : '300px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      ["2xl"]: "1536px",
    },
    extend: {
      colors:{
        'blueColor': '#2a68ff',
        'grayIsh': 'f1f4f8',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b36',
      },

      animation: {
        'loop-scroll': "loop-scroll 50s linear infinite",
      },

      keyframes: {
        "loop-scroll": {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      }
    },
  },

  plugins: [],
}

