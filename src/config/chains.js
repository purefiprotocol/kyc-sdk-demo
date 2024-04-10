import { sepolia, polygonMumbai } from 'wagmi/chains';

const mumbai = JSON.parse(JSON.stringify(polygonMumbai));

mumbai.name = 'Mumbai';

const CONFIGURED_CHAINS = [mumbai, sepolia];
const DEAFULT_CHAIN = sepolia;

export { CONFIGURED_CHAINS, DEAFULT_CHAIN, mumbai, sepolia };
