/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { useBalance } from 'wagmi';
import Tooltip from 'rc-tooltip';
import { parseFixed } from '@ethersproject/bignumber';
import { NumericFormat } from 'react-number-format';
import { LoadingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { useWallet } from '../../hooks';
import purefiSrc from '../../assets/icons/purefi.svg';

import './SwapCard.css';
import { ZERO_ADDRESS } from '../../config';

// const REGEX = '/[^0-9/.]/g';

const getRates = async (token1, token2) => {
  const DUMMY_RATES = 100;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_RATES);
    }, 500);
  });
};

const MIN_VALUE = 0.01;

const SwapCard = (props) => {
  const { payToken, receiveToken, onSwap, isSwapLoading, featured } = props;

  const { account, chain, isConnected } = useWallet();

  const [payAmount, setPayAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [isRatesLoading, setIsRatesLoading] = useState(false);
  const theRef = useRef(null);

  const payBalanceInfo = useBalance({
    address: account,
    token: payToken,
    chainId: chain?.id,
    enabled: isConnected && chain && !chain.unsupported,
    watch: true,
  });

  const receiveBalanceInfo = useBalance({
    address: account,
    token: receiveToken,
    chainId: chain?.id,
    enabled: isConnected && chain && !chain.unsupported,
    watch: true,
  });

  const payAmountChangeHandler = (values) => {
    setPayAmount(Math.abs(+values.formattedValue));
  };

  const allowedHandler = (values) => {
    return Math.abs(+values.formattedValue) >= MIN_VALUE;
  };

  useEffect(() => {
    const helper = async () => {
      try {
        setIsRatesLoading(true);
        const newRate = await getRates(
          payToken || ZERO_ADDRESS,
          receiveToken || ZERO_ADDRESS
        );
        const newValue = (newRate * (+payAmount || 0)).toFixed(4);
        const newValueNum = +newValue;
        setReceiveAmount(!newValueNum ? '' : newValueNum);
      } catch (e) {
        console.log(e);
      } finally {
        setIsRatesLoading(false);
      }
    };

    helper();
  }, [payAmount, payToken, receiveToken]);

  const swapHandler = () => {
    const isValid = theRef.current?.checkValidity();
    if (isValid) {
      const swapValue = parseFixed(
        payAmount.toString(),
        payBalanceInfo?.data?.decimals || 18
      ).toString();
      onSwap(swapValue);
    } else {
      theRef.current?.reportValidity();
    }
  };

  const isBalanceSufficient = payBalanceInfo?.data?.formatted
    ? +payBalanceInfo.data.formatted >= payAmount
    : false;

  const isLoading = isRatesLoading || isSwapLoading;

  const isSwapDisabled = !isBalanceSufficient || isLoading;

  const renderSymbol = (balanceInfo) => {
    const {
      data: balance,
      isError: isBalanceError,
      error: balanceError,
      isLoading: isBalanceLoading,
    } = balanceInfo;

    if (isBalanceLoading) {
      return <LoadingOutlined />;
    }

    if (isBalanceError) {
      console.log(balanceError);
      return 'Token';
    }
    if (balance) {
      return balance.symbol;
    }

    return 'Unknown';
  };

  const renderBalanceText = (balanceInfo) => {
    const {
      data: balance,
      isError: isBalanceError,
      error: balanceError,
      isLoading: isBalanceLoading,
    } = balanceInfo;

    let value = '---';

    if (balance?.formatted) {
      value = Number(balance.formatted).toFixed(4);
    } else if (isBalanceLoading) {
      value = 'Loading...';
    } else if (isBalanceError) {
      value = 'Error';
    } else {
      value = 'Unknown';
    }

    return `Balance: ${value}`;
  };

  const buttonClassName = classNames({
    btn: true,
    'btn-swap': true,
    w100: true,
    'btn-featured': featured,
  });

  const cardTitle = featured ? 'Featured Swap' : 'Swap';

  return (
    <div className="swap">
      <div className="card">
        <div className="card-header">
          <span className="card-header_title">
            <span>{cardTitle}</span>
            {featured && (
              <Tooltip
                className="card-header_tooltip"
                placement="top"
                trigger={['hover', 'click']}
                overlay={<span>KYC Level 2 required</span>}
              >
                <span className="card-header_powered">
                  Powered by
                  <img src={purefiSrc} alt="purefi" />
                </span>
              </Tooltip>
            )}
          </span>
        </div>
        <div className="card-body">
          <div className="row hint">
            <div className="col">You pay</div>
          </div>
          <div className="row unit">
            <div className="col-8">
              <NumericFormat
                className="amount-input"
                value={payAmount}
                onValueChange={payAmountChangeHandler}
                placeholder="0"
                isAllowed={allowedHandler}
                allowedDecimalSeparators={['.', ',']}
                getInputRef={theRef}
                valueIsNumericString
                allowLeadingZeros
                required
              />
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <div className="asset">{renderSymbol(payBalanceInfo)}</div>
            </div>
          </div>
          <div className="row justify-content-between balance">
            <div className="col-auto d-inline-flex">
              <span>
                Min amount{' '}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPayAmount(MIN_VALUE.toString());
                  }}
                  style={{ color: featured ? '#fc72ff' : '#5664e7' }}
                >
                  {MIN_VALUE}
                </a>
              </span>
            </div>
            <div className="col-auto d-inline-flex">
              <span>{renderBalanceText(payBalanceInfo)}</span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row hint">
            <div className="col">You receive</div>
          </div>
          <div className="row unit">
            <div className="col-8">
              {isRatesLoading ? (
                <LoadingOutlined className="amount-spinner" />
              ) : (
                <input
                  className="amount-input"
                  type="text"
                  value={receiveAmount}
                  onChange={() => {}}
                  placeholder="0"
                  readOnly
                />
              )}
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <div className="asset">{renderSymbol(receiveBalanceInfo)}</div>
            </div>
          </div>
          <div className="row justify-content-end balance">
            <div className="col-auto d-inline-flex">
              <span>{renderBalanceText(receiveBalanceInfo)}</span>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className={buttonClassName}
            onClick={swapHandler}
            disabled={isSwapDisabled}
          >
            {isBalanceSufficient ? 'Swap' : 'Insufficient balance'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapCard;
