import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '/main.scss',
    'primevue/resources/themes/lara-light-teal/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '/node_modules/primeflex/primeflex.css',
  ],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },
  modules: ['@nuxtjs/supabase', '@pinia/nuxt'],
})
