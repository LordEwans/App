<script lang="ts" setup>
import { getAccount, watchAccount } from "@wagmi/core";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from "@web3modal/wagmi/vue";
import { metis, polygonMumbai } from "viem/chains";

const config = useRuntimeConfig();
const projectId = config.public.projectId as string;

const metadata = {
  name: "BottleHub DApp",
  description:
    "Unparalleled Competitive GambleFi and GameFi Ecosystem Powered by Polygon.",
  url: "https://bottlehub.xyz",
  icons: ["https://bottlehub.xyz/logo.ico"],
};

const chains = [polygonMumbai, metis];
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
  <div>
    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <div class="flex justify-center">
          <header
            class="navbar py-[.2em] will-change-transform top-0 w-[96%] border md:border-0 md:border-t"
          >
            <div class="navbar-start ml-2 md:ml-6 block text-base">
              <nuxt-link
                to="/"
                class="btn bg-transparent hover:bg-transparent min-h-0 h-0 p-0 border-transparent hover:border-transparent"
              >
                <Logo />
              </nuxt-link>
            </div>
            <nav class="lg:flex justify-self-center hidden navbar-center">
              <ul class="flex">
                <li class="partials">
                  <NavigationLink
                    to="/features"
                    class="partials"
                    title="Features"
                  />
                </li>
                <li class="partials">
                  <NavigationLink to="/lobby" class="partials" title="Lobby" />
                </li>
                <li class="partials">
                  <NavigationLink
                    to="/faucet"
                    class="partials"
                    title="Faucet"
                  />
                </li>
                <li class="partials">
                  <NavigationLink to="/team" class="partials" title="Team" />
                </li>
              </ul>
              <!-- <button>
        <img src="assets/img/animated/day.svg" alt="Default" />
      </button> -->
            </nav>
            <div class="justify-self-end hidden lg:flex navbar-end">
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
            <div class="max-lg:navbar-end">
              <label
                for="my-drawer-4"
                class="drawer-button btn btn-ghost text-s btn-primary lg:hidden"
                style="--tw-bg-opacity: 0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 fill-[var(--border-color)]"
                  viewBox="0 0 24 24"
                  stroke="var(--border-color)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
          </header>
        </div>
      </div>

      <div class="drawer-side z-10 lg:hidden">
        <label
          for="my-drawer-4"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <ul
          class="menu p-4 w-[70%] md:w-80 min-h-full bg-slate-950 text-base-content"
        >
          <li class="partials">
            <NavigationLink to="/features" class="partials" title="Features" />
          </li>
          <li class="partials">
            <NavigationLink to="/lobby" class="partials" title="Lobby" />
          </li>
          <li class="partials">
            <NavigationLink to="/faucet" class="partials" title="Faucet" />
          </li>
          <li class="partials">
            <NavigationLink to="/team" class="partials" title="Team" />
          </li>
          <div>
            <button
              class="btn text-xs mx-6 btn-primary mt-9"
              v-if="!isConnected"
              @click="modal.open()"
            >
              Connect Wallet
            </button>
            <div class="mt-9" v-else>
              <w3m-account-button />
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
li.partials {
  @apply inline mx-5 font-semibold;
}
.partials {
  @apply inline-block uppercase font-bold text-xs text-[oklch(var(--p))];
}
.btn {
  @apply rounded-2xl;
}
header {
  @apply rounded-3xl mt-4 w-[96%] border-[var(--border-color)] border-opacity-60;
}
.drawer-side {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.drawer-side::-webkit-scrollbar {
  display: none;
}
</style>
