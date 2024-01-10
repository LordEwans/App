// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-security", "@nuxt/devtools"],
  security: {
    headers: {
      crossOriginEmbedderPolicy: false,
      crossOriginOpenerPolicy: false,
      originAgentCluster: false,
      contentSecurityPolicy: false,
    },
  },
  routeRules: {
    "/games/**": {
      security: {
        headers: {
          crossOriginResourcePolicy: "same-origin",
          crossOriginOpenerPolicy: "same-origin",
          crossOriginEmbedderPolicy: "require-corp",
          contentSecurityPolicy: {
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
          originAgentCluster: "?1",
          referrerPolicy: "no-referrer",
          strictTransportSecurity: {
            maxAge: 15552000,
            includeSubdomains: true,
          },
          xContentTypeOptions: "nosniff",
          xDNSPrefetchControl: "off",
          xDownloadOptions: "noopen",
          xFrameOptions: "SAMEORIGIN",
          xPermittedCrossDomainPolicies: "none",
          xXSSProtection: "0",
          permissionsPolicy: {
            camera: [],
            "display-capture": [],
            fullscreen: [],
            geolocation: [],
            microphone: [],
          },
        },
        requestSizeLimiter: {
          maxRequestSizeInBytes: 2000000,
          maxUploadFileRequestInBytes: 8000000,
          throwError: true,
        },
        rateLimiter: {
          tokensPerInterval: 150,
          interval: 300000,
          headers: false,
          driver: {
            name: "lruCache",
          },
          throwError: true,
        },
        xssValidator: {
          throwError: true,
        },
        allowedMethodsRestricter: {
          methods: "*",
          throwError: true,
        },
        nonce: true,
        ssg: {
          hashScripts: true,
          hashStyles: false,
        },
        sri: true,
      },
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
