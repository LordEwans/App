// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-security", "@nuxt/devtools"],
  security: {
    headers: {
      crossOriginEmbedderPolicy: "require-corp",
      crossOriginOpenerPolicy: "same-origin"
      //process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
  },
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
});
