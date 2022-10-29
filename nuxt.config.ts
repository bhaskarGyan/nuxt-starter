import { defineNuxtConfig } from 'nuxt'
import viteCompression from 'vite-plugin-compression';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vite: {
      plugins: [viteCompression({ algorithm: 'brotliCompress' })]
    },
    router: {
        base: '/nuxt3-brotli/'
      },
      modules: [
        ['nuxt-cache-ssr', {
          // Can be disable per enviroment, like in dev
          enabled: false,
          store: {
            // Plceholder for store type, will be usable after Redis Release
            type: 'memory',
            // maximum number of pages to store in memory
            // if limit is reached, least recently used page
            // is removed.
            max: 500,
            // number of Millisecond to store this page in cache
            ttl: 1000 * 60 * 180 // 3 hours
          },
          pages: [
            // these are prefixes of pages that need to be cached
            '/',
    
          ],
          key: (route: string, headers: any, device: Device) => {
    
            // Link to the function will be broken, so cannot use any imported modules or custom functions
            //sample of using device to generate key
    
            const { userAgent, ...deviceType } = device
            const key = [route];
            // Object.keys(deviceType).forEach(val => {
            //   if (deviceType[val]) {
            //     key.push(val)
            //   }
            // })
            // returned value will be hashed using ohash
            // console.log(key)
            return key.join("-")
          }
        }
        ],
      ],
  });