/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    container: false,
  },
  content: [
    "./features/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

