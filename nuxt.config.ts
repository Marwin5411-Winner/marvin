// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/turnstile"],

  turnstile: {
    siteKey: "0x4AAAAAAAHSbfxhKh7cGOBG",
  },
  runtimeConfig: {
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: "0x4AAAAAAAHSbaUSdtqNSntRQjQbKoLNF2Q",
    },
  },
});
