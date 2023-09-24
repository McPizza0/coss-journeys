// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@unocss/nuxt',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg-sprite',
  ],
  css: ['@/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    storageKey: 'un-color-mode',
  },
  build: {
    transpile: ['trpc-nuxt'],
  },
});
