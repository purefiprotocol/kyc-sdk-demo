import {
  sepolia,
  arbitrumSepolia,
  optimismSepolia,
  bscTestnet,
  polygonAmoy,
} from './chains';

const FREE_CONTRACTS_DICTIONARY = {
  [sepolia.id]: {
    contractAddress: '0x5072dA8B82B8Faebd69Ef44E8Cd4bf479AEbaEBa',
    tokenAddress: '0x632C855E22dFD82B0A6b399ACF8b92CB18E17FeE', // tUFI
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
  [arbitrumSepolia.id]: {
    contractAddress: '0x591Df4DCc584951F87F077048a03EDc198950fca',
    tokenAddress: '0x4C960866dACd8b4B2cb0287B7079F36631F0AB28', // custom stable
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
  [optimismSepolia.id]: {
    contractAddress: '0x8B0942138911eb71bc3cb0FBb80F2E8F04b351A6',
    tokenAddress: '0xa784295ec77D69917bCFa97200897393e04e1c65', // custom stable
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
  [bscTestnet.id]: {
    contractAddress: '0x47453D877B62D19d76FFc976B13773fD022d4d69',
    tokenAddress: '0xa784295ec77D69917bCFa97200897393e04e1c65', // custom stable
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
  [polygonAmoy.id]: {
    contractAddress: '0x91F321E28745BCc3ae426B7D694Ec8473F5b51C1',
    tokenAddress: '0xa784295ec77D69917bCFa97200897393e04e1c65', // custom stable
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
  [sepolia.id]: {
    contractAddress: '0xFE88FC9144a92b05f55F19b55eAe096121D94261',
    tokenAddress: '0x632C855E22dFD82B0A6b399ACF8b92CB18E17FeE', // tUFI
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
  [arbitrumSepolia.id]: {
    contractAddress: '0xdC118d6354bEeaCf832230E49A8F1f234d461804',
    tokenAddress: '0x4C960866dACd8b4B2cb0287B7079F36631F0AB28', // custom stable
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
  [optimismSepolia.id]: {
    contractAddress: '0x75cf55949146Bff26c44184C76983c7e3f8CA699',
    tokenAddress: '0xa784295ec77D69917bCFa97200897393e04e1c65', // custom stable
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
  [bscTestnet.id]: {
    contractAddress: '0x7BAb0a66A1186dE71c71cD193eeE5fe2f4e53884',
    tokenAddress: '0xa784295ec77D69917bCFa97200897393e04e1c65', // custom stable
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
  [polygonAmoy.id]: {
    contractAddress: '0x7BAb0a66A1186dE71c71cD193eeE5fe2f4e53884',
    tokenAddress: '0xa784295ec77D69917bCFa97200897393e04e1c65', // custom stable
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
  [sepolia.id]: {
    contractAddress: '0x1b64655512a87BBb4C45A62c4Af4Ab0FdC7bFD50',
    tokenAddress: '0x632C855E22dFD82B0A6b399ACF8b92CB18E17FeE', // tUFI
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'recepient',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'ethAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'ufiAmount',
            type: 'uint256',
          },
        ],
        name: 'DemoPurchase',
        type: 'event',
      },
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
  [arbitrumSepolia.id]: {
    contractAddress: '0xDCb92aD83aD981fBd6814E2951C855ECF14f0618',
    tokenAddress: '0x4C960866dACd8b4B2cb0287B7079F36631F0AB28', // custom stable
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'recepient',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'ethAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'ufiAmount',
            type: 'uint256',
          },
        ],
        name: 'DemoPurchase',
        type: 'event',
      },
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
  [optimismSepolia.id]: {
    contractAddress: '0x24eE31F49Cd31C9639BB24136e621752075c11c1',
    tokenAddress: '0xa784295ec77D69917bCFa97200897393e04e1c65', // custom stable
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'recepient',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'ethAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'ufiAmount',
            type: 'uint256',
          },
        ],
        name: 'DemoPurchase',
        type: 'event',
      },
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
  [bscTestnet.id]: {
    contractAddress: '0x00446a32def250906003074626AA88cF168b4664',
    tokenAddress: '0xa784295ec77D69917bCFa97200897393e04e1c65', // custom stable
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'recepient',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'ethAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'ufiAmount',
            type: 'uint256',
          },
        ],
        name: 'DemoPurchase',
        type: 'event',
      },
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
  [polygonAmoy.id]: {
    contractAddress: '0x00446a32def250906003074626AA88cF168b4664',
    tokenAddress: '0xa784295ec77D69917bCFa97200897393e04e1c65', // custom stable
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'recepient',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'ethAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'ufiAmount',
            type: 'uint256',
          },
        ],
        name: 'DemoPurchase',
        type: 'event',
      },
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
