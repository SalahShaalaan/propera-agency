/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlack: "#1B2A4E",
        mainGold: "#B89650",
      },
      gridTemplateColumns: {
        "auto-fit-150": "repeat(auto-fit, minmax(150px, 1fr))",
        "auto-fit-250": "repeat(auto-fit, minmax(250px, 1fr))",
        "auto-fit-350": "repeat(auto-fit, minmax(350px, 1fr))",
        "auto-fit-450": "repeat(auto-fit, minmax(450px, 1fr))",
        "auto-fit-650": "repeat(auto-fit, minmax(650px, 1fr))",
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        }
      }
    },

  },
  plugins: [],
};
