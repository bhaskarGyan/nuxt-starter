// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    router: {
        base: '/nuxt3-brotli/'
      },
      experimental:{
        inlineSSRStyles:true
      }
  });