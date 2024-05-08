import { sepolia, arbitrumSepolia, bscTestnet } from 'viem/chains';

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
