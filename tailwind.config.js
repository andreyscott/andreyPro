/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/img/cat.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
        colors: {
          dark: "#181818",
          blue: '#2596be',
        },
      },
          
  },  
  plugins: [],
}