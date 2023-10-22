import { useEffect, useMemo, useState } from 'react';
import { useAccount, useNetwork, useProvider, useSigner } from 'wagmi';
import { KycWidget } from '@purefi/kyc-sdk';
import WalletContext from './WalletContext';

const WalletProvider = (props) => {
  const { children } = props;
  const [isDisconnected, setIsDisconnected] = useState(true);

  const { chain } = useNetwork();
  const { address, isConnected, isConnecting } = useAccount({
    onDisconnect() {
      setIsDisconnected(true);
    },
  });

  const { data: signer } = useSigner();

  const provider = useProvider();

  useEffect(() => {
    if (signer) {
      KycWidget.setSigner(signer);
    } else {
      KycWidget.unsetSigner();
    }
  }, [signer]);

  const memoizedValue = useMemo(
    () => ({
      account: address,
      chain,
      provider,
      signer,
      isConnected,
      isDisconnected,
      isConnecting,
    }),
    [
      address,
      isConnected,
      isDisconnected,
      isConnecting,
      chain,
      provider,
      signer,
    ]
  );

  return (
    <WalletContext.Provider value={memoizedValue}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
