import { errorCodes, serializeError } from 'eth-rpc-errors';
import { NavLink } from 'react-router-dom';
import { PureFI, PureFIErrorCodes } from '@purefi/kyc-sdk';
import { toast } from 'react-toastify';
import { DEFAULT_SIGN_TYPE, ZERO_ADDRESS } from '../config';

const useVerifier = (contractData, ruleId, signType = DEFAULT_SIGN_TYPE) => {
  const verify = async (account, signer, chain, toastId) => {
    const contractAddress = contractData?.contractAddress || ZERO_ADDRESS;
    if (contractAddress === ZERO_ADDRESS) {
      toast.update(toastId, {
        render: 'Contract is not configured',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
        closeButton: true,
      });
    } else {
      try {
        const dataPack = {
          sender: account,
          receiver: contractAddress,
          chainId: chain.id,
          ruleId,
        };

        const message = JSON.stringify(dataPack);
        const signature = await signer.signMessage(message);

        const payload = {
          message,
          signature,
        };

        toast.update(toastId, {
          render: 'User verification in progress...',
          type: 'default',
          isLoading: true,
        });

        const purefiData = await PureFI.verifyRule(payload, signType);

        toast.update(toastId, {
          render: 'User verified!',
          type: 'info',
          isLoading: false,
          autoClose: 1000,
          closeButton: true,
        });

        return purefiData;
      } catch (error) {
        const { code, message: theMessage } = serializeError(error);

        if (
          code === errorCodes.provider.userRejectedRequest ||
          ((code === errorCodes.rpc.invalidInput ||
            code === errorCodes.rpc.internal) &&
            (theMessage.includes('reject') || theMessage.includes('cancel')))
        ) {
          const errorMessage = 'User denied message signature';
          toast.update(toastId, {
            render: errorMessage,
            type: 'error',
            isLoading: false,
            autoClose: 3000,
            closeButton: true,
          });
        } else if (error.code === PureFIErrorCodes.FORBIDDEN) {
          toast.update(toastId, {
            render: (
              <NavLink
                to="/kyc"
                style={{
                  textDecoration: 'none',
                  paddingBottom: '5px',
                  borderBottom: '1px solid',
                  color: 'white',
                }}
              >
                {error.message}
              </NavLink>
            ),
            type: 'warning',
            isLoading: false,
            autoClose: false,
            closeButton: true,
            closeOnClick: true,
          });
        } else {
          toast.update(toastId, {
            render: error.message,
            type: 'error',
            isLoading: false,
            autoClose: 5000,
            closeButton: true,
          });
        }

        return false;
      }
    }
  };

  return {
    verify,
  };
};

export default useVerifier;
