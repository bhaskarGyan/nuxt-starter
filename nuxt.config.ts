// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    router: {
        base: '/nuxt3-brotli/'
      },
      experimental:{
        inlineSSRStyles:false
      }
  });