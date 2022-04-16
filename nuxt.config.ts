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
  runtimeConfig: {
    stripeSecret: process.env.STRIPE_SECRET_API_KEY,
    public: {
      stripePublicKey: 'pk_test_51Kp2h5CVGaMgucvpbryONcPGQtvO5zpl8U5sRrjgC25XcVJsJzNy88rMC3mZULLg7taRLQZB3I4RjnUpUW2mxIT000jlgHRH0G'
    }
  },
  modules: ['@nuxtjs/supabase', '@pinia/nuxt'],
})
