// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/main.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})
