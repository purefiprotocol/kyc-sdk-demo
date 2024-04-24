import { sepolia, bscTestnet } from './chains';

const CONFIGURED_GAS_LIMIT_MULTIPLIERS = {
  [sepolia.id]: 5,
  [bscTestnet.id]: 3,
};

const DEFAULT_GAS_LIMIT_MULTIPLIER = 1;

export { CONFIGURED_GAS_LIMIT_MULTIPLIERS, DEFAULT_GAS_LIMIT_MULTIPLIER };
