// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: process.env.NODE_ENV === 'development'
  },

  css: ['~/assets/styles/tailwind.css'],

  test: true,

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@formkit/nuxt'
  ],

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})