// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/devtools", "nuxt-security"],
  css: ["@/assets/css/main.pcss"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/logo.svg" }],
    },
  },
  runtimeConfig: {
    public: {
      projectId: process.env.WALLET_CONNECT_KEY,
    },
  },
  routeRules: {
    "/game/**": {
      static: true,
      ssr: false,
    }
  }
});
