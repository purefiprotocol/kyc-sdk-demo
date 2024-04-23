import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { SwapCard } from '../../components';
import { useWallet, useContract, useVerifier } from '../../hooks';
import {
  FREE_CONTRACTS_DICTIONARY,
  LVL2_CONTRACTS_DICTIONARY,
  LVL2_RULE_VALUE,
  // LVL1_CONTRACTS_DICTIONARY,
  // LVL1_RULE_VALUE,
} from '../../config';

import './Swap.css';

function Swap() {
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [freeContractLoading, setFreeContractLoading] = useState(false);
  const [featuredContractLoading, setFeaturedContractLoading] = useState(false);

  const { account, signer, chain } = useWallet();

  const freeContractData = FREE_CONTRACTS_DICTIONARY[chain.id];
  const featuredContractData = LVL2_CONTRACTS_DICTIONARY[chain.id];
  // const featuredContractData = LVL1_CONTRACTS_DICTIONARY[chain.id];

  const { write: freeSwap } = useContract(freeContractData, 'buyForWithoutKYC');

  const { write: featuredSwap } = useContract(
    featuredContractData,
    'buyForWithKYCPurefi2'
    // 'buyForWithKYCPurefi1'
  );
  const { verify } = useVerifier(featuredContractData, LVL2_RULE_VALUE);
  // const { verify } = useVerifier(featuredContractData, LVL1_RULE_VALUE);

  const handleFreeSwap = useCallback(
    async (value) => {
      const swapToastId = toast.loading('Pending...');
      setFreeContractLoading(true);

      const args = [account];
      const overrides = {
        value,
      };

      await freeSwap?.(args, overrides, swapToastId);

      setFreeContractLoading(false);
    },
    [account, freeSwap]
  );

  const handleFeaturedSwap = useCallback(
    async (value) => {
      const verificationToastId = toast.loading('Pending...');

      setVerificationLoading(true);
      const purefiData = await verify(
        account,
        signer,
        chain,
        verificationToastId
      );
      setVerificationLoading(false);

      if (purefiData) {
        const swapToastId = toast.loading('Pending...', { delay: 500 });
        setFeaturedContractLoading(true);
        const args = [account, purefiData];
        const overrides = {
          value,
        };

        try {
          await featuredSwap?.(args, overrides, swapToastId);
        } catch (e) {
          console.log(e);
        } finally {
          setFeaturedContractLoading(false);
        }
      }
    },
    [account, signer, chain, verify, featuredSwap]
  );

  const isFreeSwapLoading = freeContractLoading;
  const isFeaturedSwapLoading = verificationLoading || featuredContractLoading;

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-4 offset-lg-2 mb-4">
          <SwapCard
            receiveToken={freeContractData.tokenAddress}
            onSwap={handleFreeSwap}
            isSwapLoading={isFreeSwapLoading}
          />
        </div>
        <div className="col-xs-12 col-md-6 col-lg-4 mb-4 pb-4">
          <SwapCard
            receiveToken={featuredContractData.tokenAddress}
            onSwap={handleFeaturedSwap}
            isSwapLoading={isFeaturedSwapLoading}
            featured
          />
        </div>
      </div>
    </div>
  );
}

export default Swap;
