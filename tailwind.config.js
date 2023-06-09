/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        rivals_lobby: "url('tr.png')",
      },
      colors: {
        bg: {
          0: "#0a0a0a",
          1: "#111111",
          2: "#303030",
        },
        accent: {
          0: "#ff3e00",
        },
      },
    },
  },
  plugins: [],
};
