/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#333',
        'custom-light-high': '#D9D9D9',
        'custom-light-low': '#B8B3B3',
        'custom-green': '#79AC78',
        'custom-brown': '#F3B062',
        'custom-cranberry': '#DF437E',
        'custom-blue': '#547793',
        'custom-crimson': '#DC143C',
        'primary': '#008DDA',
      },
      height: {
        '200': '200px',
        '250': '250px',
        '350': '350px',
        '300': '300px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        'gradient-primary': 'radial-gradient(circle farthest-corner at 48.4% 47.5%, rgba(122,183,255,1) 0%, #008DDA 90%)',
        'gradient-secondary': 'radial-gradient( circle 993px at 0.5% 50.5%,  rgba(137,171,245,0.37) 0%, rgba(245,247,252,1) 100.2% )',
      },
    },
  },
  plugins: [],
}
