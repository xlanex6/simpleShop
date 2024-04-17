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
          '50': '#fbf6f1',
          '100': '#f5ebdf',
          '200': '#ebd3bd',
          '300': '#deb593',
          '400': '#d09067',
          '500': '#c36f41',
          '600': '#b8613e',
          '700': '#994c35',
          '800': '#7b3f31',
          '900': '#64362a',
          '950': '#351a15',
        },
        "alex": '#d09067'
    }
    },
  },
  plugins: [],
}

