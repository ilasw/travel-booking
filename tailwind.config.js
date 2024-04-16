/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./features/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}

