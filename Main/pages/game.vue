<script lang="js" setup>
import { getAccount, watchAccount } from "@wagmi/core";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from "@web3modal/wagmi/vue";
import { polygonMumbai, polygon } from "viem/chains";

const config = useRuntimeConfig();
const projectId = config.public.projectId;

const metadata = {
  name: "BottleHub DApp",
  description: "My Website description",
  url: "https:/bottlehub.xyz",
  icons: ["https:/bottlehub.xyz/logo.svg"],
};

const chains = [polygonMumbai, polygon];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: "dark",
  themeVariables: {
    "--w3m-font-family": "Gemsbuck",
    "--w3m-border-radius-master": "2px",
    "--w3m-accent": "#",
    "--w3m-color-mix": "#020617",
    "--w3m-color-mix-strength": 65,
  },
  tokens: {
    80001: {
      address: "0x8318312dE65409CB61dF940a821C710e24843e62",
      image: "https:/bottlehub.xyz/logo.svg",
    },
  },
});

window.modal3 = useWeb3Modal();
const router = useRouter();
const isConnected = ref(getAccount().isConnected);

const unwatch = watchAccount(
  (account) => (isConnected.value = account.isConnected)
);
</script>
<template>
  <title>Games</title>
  <div class="h-screen w-full flex items-center justify-center">
    <iframe
      src="/game/demo/index.html"
      frameborder="0"
      allowfullscreen="true"
      scrolling="no"
      allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated"
      allowtransparency="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      msallowfullscreen="true"
      width="1280"
      height="720"
      :id="iframeClass"
      fullscreen_button="bottom"
    ></iframe>
    <button class="btn" @click="openFullscreen()">Fullscreen</button>
  </div>
</template>

<style>
.fullScreen {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
