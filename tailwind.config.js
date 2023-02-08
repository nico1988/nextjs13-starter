/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '500px',
        md: '800px',
        lg: '1200px',
        xl: '1536px',
      },
      colors: {
        brand: {
          accent: '#5AD769',
          main: '#324BC3',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#0C0F19',
        },
        background: {
          primary: '#0C0F19',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
