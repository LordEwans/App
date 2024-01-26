// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/devtools",
    "nuxt-gtag",
  ],
  css: [
    "@/assets/css/main.pcss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  gtag: {
    id: process.env.GTAG_ID
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
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
            "Unparalleled Competitive GambleFi and GameFi Ecosystem Powered by the Metis Blockchain Platform.",
        },
        { name: "twitter:site", content: "@bottlehubxyz" },
        { name: "twitter:image", content: "https://bottlehub.xyz/og.jpg" },
        { name: "twitter:image:src", content: "https://bottlehub.xyz/og.jpg" },
        {
          name: "keywords",
          content:
            "gambling,gaming,gamblefi,gamefi,cryptocurrency,crypto,game,games,blockchain,fi,ethereum,ethers,polygon,zkevm,testnet,mainnet,competitive,waitlist,multiplayer,casino,web3,token,tokenomics,play-to-earn,blockchain-gaming,nft-gaming,decentralized-gaming,crypto-gaming,metis,layer,2,scaling,solution,defi,platform,esports,ranked-matchmaking,leaderboards,challenges,tournaments,ecosystem,metaverse,community,virtual-world,digital-assets",
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
            "Unparalleled Competitive GambleFi and GameFi Ecosystem Powered by the Metis Blockchain Platform. ",
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
  vite: {
    server: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cross-Origin-Embedder-Policy": "require-corp",
      },
    },
  },
});
