/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#187975',
        highlight: '#eae8fb',
        bgGray: '#263544',
        bgActive: '#1d2531',
      },
      zIndex: {
        '9999': '9999',
      },
    },
  },
  plugins: [],
}

