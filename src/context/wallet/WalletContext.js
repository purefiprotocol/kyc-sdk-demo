import { createContext } from 'react';

const initialContext = {
  isConnected: false,
  isDisconnected: true,
  isConnecting: false,
};

const WalletContext = createContext(initialContext);

export default WalletContext;
