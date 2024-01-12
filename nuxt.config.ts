// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  security: {
    headers: {
      contentSecurityPolicy:
        process.env.NODE_ENV === "development"
          ? false
          : {
              "base-uri": ["'none'"],
              "font-src": ["'self'", "https:", "data:"],
              "form-action": ["'self'"],
              "frame-ancestors": ["'self'"],
              "img-src": ["'self'", "data:"],
              "object-src": ["'none'"],
              "script-src-attr": ["'none'"],
              "style-src": ["'self'", "https:", "'unsafe-inline'"],
              "script-src": [
                "'self'",
                "https:",
                "'unsafe-inline'",
                "'strict-dynamic'",
                "'nonce-{{nonce}}'",
              ],
              "upgrade-insecure-requests": true,
            },
    },
  },
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
      security: {
        headers: {
          crossOriginEmbedderPolicy: "require-corp",
          crossOriginOpenerPolicy: "same-origin",
        },
      },
    },
    "/lobby/**": {
      static: true,
      ssr: false,
      security: {
        headers: {
          crossOriginEmbedderPolicy: "require-corp",
          crossOriginOpenerPolicy: "same-origin",
        },
      },
    },
  },
  vite: {
    server: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cross-Origin-Embedder-Policy": "require-corp",
      },
    },
  },
});
