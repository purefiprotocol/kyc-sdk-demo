import { polygonMumbai } from 'wagmi/chains';

const mumbai = JSON.parse(JSON.stringify(polygonMumbai));

mumbai.name = 'Mumbai';

const CONFIGURED_CHAINS = [mumbai];
const DEAFULT_CHAIN = mumbai;

export { CONFIGURED_CHAINS, DEAFULT_CHAIN, mumbai };
