/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      padding: '2rem',
    },
    extend: {
      // Image:{
      //   'nav-bar':'("..public/assets/navLogo.png")'
      // }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
