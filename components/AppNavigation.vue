<script lang="ts" setup>
import {
  Home,
  Settings,
  ChatBubbleEmpty,
  GraphUp,
  Reports,
  ReportColumns,
} from "@iconoir/vue";
import { getAccount, watchAccount } from "@wagmi/core";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from "@web3modal/wagmi/vue";
import { polygonMumbai, polygon } from "viem/chains";

const config = useRuntimeConfig();
const projectId = config.public.projectId as string;

const metadata = {
  name: "BottleHub DApp",
  description: "My Website description",
  url: "https:/bottlehub.vercel.app",
  icons: ["https:/bottlehub.vercel.app/logo.svg"],
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
      image: "https:/bottlehub.vercel.app/logo.svg",
    },
  },
});

const modal = useWeb3Modal();
const router = useRouter();
const isConnected = ref(getAccount().isConnected);

const unwatch = watchAccount(
  (account) => (isConnected.value = account.isConnected)
);
</script>

<template>
  <div
    class="border rounded-3xl border-[var(--border-color)] border-opacity-60 fixed h-[96vh] w-16 m-0 flex flex-col justify-between"
  >
    <div
      class="relative flex items-center justify-center h-12 w-12 my-2 mx-2 hover:rounded-xl transition-all duration-100 ease-linear"
    >
      <a
        href="/"
        class="btn bg-transparent hover:bg-transparent min-h-0 h-0 p-0 border-transparent hover:border-transparent"
      >
        <AppLogo />
      </a>
    </div>
    <div class="flex flex-col justify-between items-center">
      <button class="sidebar-icon">
        <ReportColumns height="24" width="24" />
      </button>
      <button class="sidebar-icon">
        <ChatBubbleEmpty height="24" width="24" />
      </button>
      <button class="sidebar-icon">
        <GraphUp height="24" width="24" />
      </button>
    </div>
    <button class="sidebar-setting" @click="modal.open()">
      <Settings height="24" width="24" />
    </button>
  </div>
</template>

<style>
.sidebar-icon {
  @apply btn btn-ghost relative flex items-center justify-center h-14 w-14 hover:rounded-xl transition-all duration-100 ease-linear;
}
.sidebar-setting {
  @apply btn btn-ghost btn-circle relative flex items-center justify-center h-12 w-12 my-2 mx-2 hover:rounded-xl transition-all duration-100 ease-linear;
}
</style>
