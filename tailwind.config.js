module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cabinet: '"CabinetGrotesk", serif',
        gambarino: '"Gambarino", serif',
      },
      colors: {
        green: '#A9FF7F',
        'light-gray': '#FFFFFF',
        'medium-gray': '#8A8A8E',
        dark: '#1D1D1F',
      },
    },
    container: {
      center: false,
      padding: '1rem',
    },
    debugScreens: {
      position: ['bottom', 'right'],
      style: {
        backgroundColor: 'white',
        color: 'black',
      },
      prefix: 'screen: ',
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
