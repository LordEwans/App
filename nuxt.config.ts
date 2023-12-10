// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    "@/assets/css/main.pcss",
  ],
  app: {
    head: {
      //link: [{ rel: "icon", type: "image/svg", href: "/icon.svg" }],
    },
  },
});
