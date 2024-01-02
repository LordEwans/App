<script lang="ts" setup>
import { getAccount, watchAccount } from "@wagmi/core";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from "@web3modal/wagmi/vue";
import { sepolia, arbitrum } from "viem/chains";

const config = useRuntimeConfig();
const projectId = config.public.projectId as string;

const metadata = {
  name: "BottleHub DApp",
  description: "My Website description",
  url: "https:/bottlehub.vercel.app",
  icons: ["https:/bottlehub.vercel.app/logo.svg"],
};

const chains = [sepolia, arbitrum];
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
    11155111: {
      address: "0x153dE0bA5B0DdEb8817C4bc2f6Afd201ae391c48",
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
    <div class="">
      <button class="sidebar-icon">J</button>
      <button class="sidebar-icon">J</button>
      <button class="sidebar-icon">J</button>
      <button class="sidebar-icon">J</button>
    </div>
    <button class="sidebar-account" @click="modal.open()"><img src="assets/icons/eth-diamond-rainbow.png" alt="" class="rounded-full h-10"></button>
  </div>
</template>

<style>
.sidebar-icon {
  @apply btn btn-ghost relative flex items-center justify-center h-12 w-12 my-2 mx-2
  hover:bg-slate-900 hover:rounded-xl transition-all duration-100 ease-linear;
}
.sidebar-account {
  @apply btn btn-circle relative flex items-center justify-center h-12 w-12 my-2 mx-2;
}
</style>
