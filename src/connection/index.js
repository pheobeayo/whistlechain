import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

export const SUPPORTED_CHAIN = 84532;

export const isSupportedChain = (chainId) =>
  Number(chainId) === SUPPORTED_CHAIN;

const BaseSepolia = {
  chainId: SUPPORTED_CHAIN,
  name: "Base Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.basescan.org/",
  rpcUrl: import.meta.env.VITE_INFURA_RPC,
};

const BaseMainnet = {
  chainId: 8453,
  name: "Base mainnet",
  currency: "ETH",
  explorerUrl: "https://basescan.org/",
  rpcUrl: import.meta.env.VITE_INFURA_MAINNET_RPC,
};

const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://localhost:5173',
  icons: ['https://localhost:5173']
}

export const configWeb3Modal = () => createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [BaseSepolia, BaseMainnet],
  projectId: import.meta.env.VITE_PROJECTID,
  enableAnalytics: false,
  themeVariables: {
    '--w3m-accent': '#3F9AAE',
    '--w3m-border-radius-master': '10'
  }
})