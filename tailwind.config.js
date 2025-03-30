/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      
      backgroundImage: {
        // desktop background
        home: "url('src/assets/background-home-desktop.jpg')",
        destination: "url('src/assets/background-destination-desktop.jpg')",
        crew: "url('src/assets/background-crew-desktop.jpg')",
        technology: "url('src/assets/background-technology-desktop.jpg')",

        // tablet background
        'tablet-home': "url('src/assets/background-home-tablet.jpg')",
        'tablet-destination': "url('src/assets/background-destination-tablet.jpg')",
        'tablet-crew': "url('src/assets/background-crew-tablet.jpg')",
        'tablet-technology': "url('src/assets/background-technology-tablet.jpg')",

        // mobile background  
       'mobile-home': "url('src/assets/background-home-mobile.jpg')",
        'mobile-destination': "url('src/assets/background-destination-mobile.jpg')",
        'mobile-crew': "url('src/assets/background-crew-mobile.jpg')",
        'mobile-technology': "url('src/assets/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
}