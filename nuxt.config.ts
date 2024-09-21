// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/auto-animate",
    "@hypernym/nuxt-anime",
  ],


  compatibilityDate: "2024-09-21",
});