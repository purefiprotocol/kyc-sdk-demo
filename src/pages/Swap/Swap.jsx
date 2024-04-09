import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { Client, cacheExchange, fetchExchange } from '@urql/core';
import { parseFixed } from '@ethersproject/bignumber';
import { SwapCard } from '../../components';
import { useWallet, useContract, useVerifier } from '../../hooks';
import {
  FREE_CONTRACTS_DICTIONARY,
  LVL2_CONTRACTS_DICTIONARY,
  LVL2_RULE_VALUE,
} from '../../config';

import './Swap.css';

function Swap() {
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [freeContractLoading, setFreeContractLoading] = useState(false);
  const [featuredContractLoading, setFeaturedContractLoading] = useState(false);

  const { account, signer, chain } = useWallet();

  const freeContractData = FREE_CONTRACTS_DICTIONARY[chain.id];
  const featuredContractData = LVL2_CONTRACTS_DICTIONARY[chain.id];

  const { write: freeSwap } = useContract(freeContractData, 'buyForWithoutKYC');

  const { write: featuredSwap } = useContract(
    featuredContractData,
    'buyForWithKYCPurefi2'
  );

  const { verify } = useVerifier(featuredContractData, LVL2_RULE_VALUE);

  const checkLimits = async (sender, value) => {
    const APIURL =
      'https://api.studio.thegraph.com/query/63726/demo-buyer2/v0.0.1';

    const client = new Client({
      url: APIURL,
      exchanges: [cacheExchange, fetchExchange],
    });

    const tokensQuery = (sender) => `
      {
        demoPurchases(where: {recepient: "${sender}"}) {
          ethAmount
          ufiAmount
        }
      }
    `;

    const theQuery = tokensQuery(sender);

    try {
      const result = await client.query(theQuery).toPromise();

      console.log(result);

      const ufiSwaps = result.data.demoPurchases.map((item) =>
        parseFixed(item.ufiAmount, 18)
      );

      console.log(ufiSwaps, value);
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const clickHandler = async () => {
    const seenKytMessageHashes = await getSeenKytMessageHashes(46253575);
    console.log(seenKytMessageHashes);
  };

  const getSeenKytMessageHashes = async (blockFrom, client = 'panther') => {
    const SUBGRAPH_API_URL =
      'https://api.studio.thegraph.com/query/63726/demo2-pantherpoolv1/v0.0.1';
    const contractDeploymentBlock = 46252675;

    const theBlockFrom = blockFrom || contractDeploymentBlock;

    const graphqlClient = new Client({
      url: SUBGRAPH_API_URL,
      exchanges: [cacheExchange, fetchExchange],
    });

    const query = `
      query GetByClientFromBlock($blockFrom: Int!, $client: String!) {
        seenKytMessageHashes(where: {client: $client, _change_block: { number_gte: $blockFrom } }) {
          id
          client
          contractAddress
          kytMessageHash
          blockTimestamp
          blockNumber
          transactionHash
        }
      }
    `;

    const variables = {
      client,
      blockFrom: theBlockFrom,
    };

    try {
      const result = await graphqlClient.query(query, variables).toPromise();

      console.log(result);
      return result.data.seenKytMessageHashes;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

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

      const limitError = await checkLimits(account, value);

      if (limitError) {
        toast.update(verificationToastId, {
          render: limitError,
          type: 'error',
          isLoading: false,
          autoClose: 5000,
          closeButton: true,
        });

        return;
      }

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

        await featuredSwap?.(args, overrides, swapToastId);

        setFeaturedContractLoading(false);
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
          <button type="button" onClick={clickHandler}>
            Click
          </button>
        </div>
      </div>
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
