/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#0B0D17",
      secondary: "#D0D6F9",
      tertiary: "#FFFFFF",
      gray: "#9ca3af",
    },
    backgroundImage: {
      'background-home': "url('/src/assets/images/home/background-home-desktop.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
      'background-destination': "url('/src/assets/images/destination/background-destination-desktop.jpg')",

    }
  },
  plugins: [],
}

