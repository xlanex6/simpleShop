/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#eefbf5',
          '100': '#d6f5e5',
          '200': '#b0eacf',
          '300': '#7cd9b3',
          '400': '#46c193',
          '500': '#25ad7f',
          '600': '#168562',
          '700': '#116b50',
          '800': '#105542',
          '900': '#0e4637',
          '950': '#07271f',
        },
        "alex": '#d09067'
    }
    },
  },
  plugins: [],
}

