import { sepolia, arbitrumSepolia } from './chains';

const DASHBOARD_URL = import.meta.env.VITE_STAGE_DASHBOARD_URL;
const ISSUER_URL = import.meta.env.VITE_STAGE_ISSUER_URL;

const CONFIGURED_URLS = {
  [sepolia.id]: {
    dashboard: DASHBOARD_URL,
    issuer: ISSUER_URL,
  },
  [arbitrumSepolia.id]: {
    dashboard: DASHBOARD_URL,
    issuer: ISSUER_URL,
  },
};

const DEFAULT_URLS = {
  dashboard: DASHBOARD_URL,
  issuer: ISSUER_URL,
};

export { CONFIGURED_URLS, DEFAULT_URLS };
