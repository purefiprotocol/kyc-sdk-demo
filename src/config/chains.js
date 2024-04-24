import { sepolia, bscTestnet } from 'wagmi/chains';

const arbitrumSepolia = {
  id: 421614,
  name: 'Arbitrum Sepolia',
  network: 'arbitrumSepolia',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://sepolia-rollup.arbitrum.io/rpc'],
    },
    public: {
      http: ['https://sepolia-rollup.arbitrum.io/rpc'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Arbiscan',
      url: 'https://sepolia.arbiscan.io',
    },
  },
};

bscTestnet.name = 'BSC Testnet';

const CONFIGURED_CHAINS = [sepolia, arbitrumSepolia, bscTestnet];
const DEAFULT_CHAIN = sepolia;

export {
  CONFIGURED_CHAINS,
  DEAFULT_CHAIN,
  sepolia,
  arbitrumSepolia,
  bscTestnet,
};
