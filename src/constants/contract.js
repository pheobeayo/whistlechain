import { ethers } from "ethers";
import abi from './abi.json'
import tokenAbi from './tokenAbi.json'

export const getWhistleChainContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_CONTRACT_ADDRESS,
        abi,
        providerOrSigner
    );

export const getTokenContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_WHISTLETOKEN_ADDRESS ,
        tokenAbi,
        providerOrSigner
    );
