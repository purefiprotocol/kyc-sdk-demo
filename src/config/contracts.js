import { mumbai } from './chains';

const FREE_CONTRACTS_DICTIONARY = {
  [mumbai.id]: {
    contractAddress: '0xB5eBb6E0e4D77C25297cf33E6BcE0eDa98ff3509',
    tokenAddress: '0x70892902C0BfFdEEAac711ec48F14c00b0fa7E3A', // tUFI
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint8',
            name: 'version',
            type: 'uint8',
          },
        ],
        name: 'Initialized',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_to',
            type: 'address',
          },
        ],
        name: 'buyForWithoutKYC',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ruleID',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_ruleId',
            type: 'uint256',
          },
        ],
        name: 'setRuleId',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_verifier',
            type: 'address',
          },
        ],
        name: 'setVerifier',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ufi',
        outputs: [
          {
            internalType: 'contract ERC20Upgradeable',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'version',
        outputs: [
          {
            internalType: 'uint32',
            name: '',
            type: 'uint32',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
    ],
  },
};

const LVL1_CONTRACTS_DICTIONARY = {
  [mumbai.id]: {
    contractAddress: '0xb6cE3785afcBf6da7F775D77c3951a25D613E620',
    tokenAddress: '0x70892902C0BfFdEEAac711ec48F14c00b0fa7E3A', // tUFI
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint8',
            name: 'version',
            type: 'uint8',
          },
        ],
        name: 'Initialized',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_to',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: '_purefidata',
            type: 'bytes',
          },
        ],
        name: 'buyForWithKYCPurefi1',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ruleID',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_ruleId',
            type: 'uint256',
          },
        ],
        name: 'setRuleId',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_verifier',
            type: 'address',
          },
        ],
        name: 'setVerifier',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ufi',
        outputs: [
          {
            internalType: 'contract ERC20Upgradeable',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'version',
        outputs: [
          {
            internalType: 'uint32',
            name: '',
            type: 'uint32',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
    ],
  },
};

const LVL2_CONTRACTS_DICTIONARY = {
  [mumbai.id]: {
    contractAddress: '0x61Db3f559C8Bd4c2eA40c241302b6cc03194dbA4',
    tokenAddress: '0x70892902C0BfFdEEAac711ec48F14c00b0fa7E3A', // tUFI
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint8',
            name: 'version',
            type: 'uint8',
          },
        ],
        name: 'Initialized',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_to',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: '_purefidata',
            type: 'bytes',
          },
        ],
        name: 'buyForWithKYCPurefi2',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_verifier',
            type: 'address',
          },
        ],
        name: 'setVerifier',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ufi',
        outputs: [
          {
            internalType: 'contract ERC20Upgradeable',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'version',
        outputs: [
          {
            internalType: 'uint32',
            name: '',
            type: 'uint32',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
    ],
  },
};

export {
  FREE_CONTRACTS_DICTIONARY,
  LVL1_CONTRACTS_DICTIONARY,
  LVL2_CONTRACTS_DICTIONARY,
};
