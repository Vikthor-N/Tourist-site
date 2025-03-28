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
        home: "url('src/assets/background-home-desktop.jpg')",
        destination: "url('src/assets/background-destination-desktop.jpg')",
        crew: "url('src/assets/background-crew-desktop.jpg')",
        technology: "url('src/assets/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
}