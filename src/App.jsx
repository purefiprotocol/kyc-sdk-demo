import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { PureFI } from '@purefi/kyc-sdk';
import { WalletProvider } from './context';
import {
  DEFAULT_URLS,
  CONFIGURED_CHAINS,
  sepolia,
  arbitrumSepolia,
  bscTestnet,
} from './config';
import { Layout } from './components';
import { Swap, Kyc, NotFound } from './pages';
import sepoliaLogo from './assets/icons/sepolia.png';
import arbitrumSepoliaLogo from './assets/icons/arbitrum-sepolia.svg';
import bscTestnetLogo from './assets/icons/bsc.svg';

const wcProjectId = import.meta.env.VITE_WALLECT_CONNECT_PROJECT_ID;

const { chains, provider } = configureChains(CONFIGURED_CHAINS, [
  w3mProvider({ projectId: wcProjectId }),
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId: wcProjectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

const App = () => {
  useEffect(() => {
    PureFI.setIssuerUrl(DEFAULT_URLS.issuer);
  }, []);

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <WalletProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Swap />} />
                <Route path="/kyc" element={<Kyc />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </WalletProvider>
      </WagmiConfig>

      <Web3Modal
        projectId={wcProjectId}
        ethereumClient={ethereumClient}
        chainImages={{
          [sepolia.id]: sepoliaLogo,
          [arbitrumSepolia.id]: arbitrumSepoliaLogo,
          [bscTestnet.id]: bscTestnetLogo,
        }}
        enableNetworkView
      />
    </>
  );
};

export default App;
