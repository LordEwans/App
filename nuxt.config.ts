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
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https:/bottlehub.xyz/favicon.ico",
        },
      ],
      meta: [
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "BottleHub - Gambling on The Edge",
        },
        {
          name: "twitter:description",
          content:
            "Unparalleled Competitive GambleFi and GameFi Ecosystem Powered by Metis.",
        },
        { name: "twitter:site", content: "@bottlehubxyz" },
        { name: "twitter:image", content: "https://bottlehub.xyz/og.jpg" },
        {
          name: "keywords",
          content:
            "gambling,gaming,gamblefi,gamefi,cryptocurrency,crypto,game,games,blockchain,fi,ethereum,ethers,metis,zkevm,testnet,mainnet,competitive,waitlist,multiplayer,casino,web3,token,crypto,tokenomics",
        },
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "og-title",
          property: "og:title",
          content: "BottleHub - Gambling on The Edge",
        },
        {
          hid: "og-desc",
          property: "og:description",
          content:
            "Unparalleled Competitive GambleFi and GameFi Ecosystem Powered by Metis.",
        },
        {
          hid: "og-image",
          property: "og:image",
          content: "https://bottlehub.xyz/og.jpg",
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "https://bottlehub.xyz",
        },
        { hid: "t-type", name: "twitter:card", content: "summary_large_image" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      projectId: process.env.WALLET_CONNECT_KEY,
    },
  },
  routeRules: {
    "/**": {
      ssr: true,
      prerender: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
    },
    "/game/**": {
      static: true,
      ssr: false,
    },
    "/lobby/**": {
      static: true,
      ssr: false,
    },
    "/features/**": {
      ssr: true,
    },
    "/faucet/**": {
      static: true,
      ssr: false,
    },
    "/team/**": {
      ssr: true,
    },
  },
});
