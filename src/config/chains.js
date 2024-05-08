import {
  sepolia,
  arbitrumSepolia,
  optimismSepolia,
  bscTestnet,
  polygonAmoy,
} from 'viem/chains';

bscTestnet.name = 'BSC Testnet';

const CONFIGURED_CHAINS = [
  sepolia,
  arbitrumSepolia,
  optimismSepolia,
  bscTestnet,
  polygonAmoy,
];

const DEAFULT_CHAIN = sepolia;

export {
  CONFIGURED_CHAINS,
  DEAFULT_CHAIN,
  sepolia,
  arbitrumSepolia,
  optimismSepolia,
  bscTestnet,
  polygonAmoy,
};
