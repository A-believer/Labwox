/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      "clear": "transparent",
      'black': '#000000',
      'blackii': '#212529',
      'blackiii': '#121127',
      'blackiv': '#1e1e1e',
      'blackv': "#262626",
      'orange': '#fe423d',
      'white': '#ffffff',
      'whitebg': '#f5f5f5',
      'whiteii': '#fcccca',
      'whitebgii': '#fafafa',
      'whitebgiii': '#e9e9e9',
      'whitebgiv': '#f7f7f7',
      'whitebgv': '#f0f3f2',
      'grey': '#767778',
      'greyii': '#f9f9fb',
      'yellow': '#f29b38',
      'yellowii': '#feb616',
      'yellowiii': '#eea400',
      'yellowiv': 'edb900',
      'green': '#356741',
      'red': '#d2120f'
    },
    fontFamily: {
      "fair": ["Playfair Display", "serif"]
    },
    extend: {
      backgroundImage: {
        "heroBg": "url('/src/assets/heroBg.png')",
        "heroImg": "url('/src/assets/heroImg.png')",
        "ctaBgi": "url('/src/assets/ctaBg1.png')",
        "ctaBgii": "url('/src/assets/ctaBg2.png')",
        "faqBg": "url('/src/assets/faqBg.png')",
        "aboutBg": "url('/src/assets/aboutBg.png')",
        "servHeroBg": "url('/src/assets/servHeroBg.png')",
        "resourceHeroBg": "url('/src/assets/resourceHeroImg.png')",
        "contactBg": "url('/src/assets/contactBg.png')",
      },
      fontFamily: {
        "aeon": ['Aeonik', "sans-serif"],
      },
    },
  
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
}