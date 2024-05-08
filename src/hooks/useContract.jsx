import { ethers } from 'ethers';
import { errorCodes, serializeError } from 'eth-rpc-errors';
import { toast } from 'react-toastify';
import useWallet from './useWallet.js';
import { ZERO_ADDRESS } from '../config';
import { capitalizeFirstLetter } from '../utils';
import { LinkToast } from '../components';

const useContract = (contractData, functionName) => {
  const { signer, chain } = useWallet();

  const contract = new ethers.Contract(
    contractData?.contractAddress || ZERO_ADDRESS,
    contractData?.abi || [],
    signer
  );

  const write = async (args, overrides, toastId) => {
    if (contract.address === ZERO_ADDRESS) {
      toast.update(toastId, {
        render: 'Contract is not configured',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
        closeButton: true,
      });
    } else if (!functionName) {
      toast.update(toastId, {
        render: "Contract's functionName is missing",
        type: 'error',
        isLoading: false,
        autoClose: 5000,
        closeButton: true,
      });
    } else if (!contract[functionName]) {
      toast.update(toastId, {
        render: 'Contract is not configured properly',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
        closeButton: true,
      });
    } else {
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });

      try {
        const theOverrides = overrides || {};

        const txn = await contract[functionName](...args, theOverrides);
        const response = await txn.wait();
        const url = `${chain.blockExplorers.default.url}/tx/${response.transactionHash}`;

        toast.update(toastId, {
          render: <LinkToast text="Success!" linkText="txn" url={url} />,
          type: 'success',
          isLoading: false,
          autoClose: false,
          closeButton: true,
        });

        return true;
      } catch (error) {
        const { code, data, message } = serializeError(error);

        let errorMessage = '';

        if (
          code === errorCodes.provider.userRejectedRequest ||
          ((code === errorCodes.rpc.invalidInput ||
            code === errorCodes.rpc.internal) &&
            (message.includes('reject') || message.includes('cancel')))
        ) {
          errorMessage = 'Transaction has been canceled';
        } else if (
          code === errorCodes.rpc.internal &&
          data?.message?.includes('insufficient funds')
        ) {
          errorMessage = 'You have insufficient funds to pay commission';
        } else if (data?.originalError?.reason) {
          errorMessage = capitalizeFirstLetter(data.originalError.reason);
        } else {
          errorMessage = message;
        }

        toast.update(toastId, {
          render: errorMessage,
          type: 'error',
          isLoading: false,
          autoClose: 5000,
          closeButton: true,
        });

        return false;
      }
    }
  };

  return {
    write,
  };
};

export default useContract;
