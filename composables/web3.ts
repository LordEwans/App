import { getAccount, watchAccount } from "@wagmi/core";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from "@web3modal/wagmi/vue";
import { metis, polygonMumbai } from "viem/chains";

const setup = () => {
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
};

export default {
  setup: setup,
  modal: useWeb3Modal,
  isConnected: ref(getAccount().isConnected),
};
