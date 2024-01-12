<script lang="ts" setup>
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
    class="border-0 rounded-3xl border-[var(--border-color)] border-opacity-60 fixed h-[96vh] w-[92%] m-0 flex flex-col"
  >
    <div
      class="border-0 rounded-3xl border-[var(--border-color)] border-opacity-60 navbar absolute will-change-transform top-0 w-full"
    >
      <div class="navbar-start ml-2 md:ml-6 block text-base"></div>
      <div class="justify-self-end hidden md:flex navbar-end">
        <button
          class="btn btn-outline text-xs mx-6 btn-primary"
          v-if="!isConnected"
          @click="modal.open()"
        >
          Connect Wallet
        </button>
        <div v-else>
          <w3m-account-button />
        </div>
      </div>
    </div>
    <div class="h-[53vh] w-full flex justify-center items-center">
      <div class="carousel w-[99%] h-fit rounded-3xl">
        <div
          class="border-t border-l rounded-none rounded-tl-3xl border-primary border-opacity-60 absolute w-12 h-12"
        ></div>
        <div
          class="border-b border-l rounded-none rounded-bl-3xl border-primary border-opacity-60 absolute w-12 h-12 mt-32"
        ></div>
        <div
          class="border-t border-r rounded-none rounded-tr-3xl border-primary border-opacity-60 absolute w-12 h-12 ml-32"
        ></div>
        <div
          class="border-b border-r rounded-none rounded-br-3xl border-primary border-opacity-60 absolute w-12 h-12 mt-32 ml-32"
        ></div>
        <div class="h-[50vh] w-full bg-slate-900 carousel-item" id="item1">
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#item3" class="btn btn-circle">❮</a>
            <a href="#item2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div
          class="h-[50vh] w-full bg-slate-800 carousel-item carousel-center"
          id="item2"
        ></div>
        <div
          class="h-[50vh] w-full bg-slate-700 carousel-item carousel-end"
          id="item3"
        ></div>
      </div>
    </div>
  </div>
</template>
