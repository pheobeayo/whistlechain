import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getWhistleChainContract } from "../constants/contract";
import { wssProvider } from "../constants/providers";
import { ethers } from "ethers";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const useGetUserDetails = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [count, setCount] = useState(0);
  const { address } = useWeb3ModalAccount()

  const fetchUserDetails = useCallback(async () => {
    try {
      const contract = getWhistleChainContract(readOnlyProvider);
      const res = await contract.userDetails(address);
      setUserDetails(res);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const trackingReports = useCallback(() => {
    setCount((prevValue) => prevValue + 1);
    fetchUserDetails();
  }, [fetchUserDetails]);

  useEffect(() => {
    fetchUserDetails();

    const filter = {
      address: import.meta.env.VITE_CONTRACT_ADDRESS,
      topics: [ethers.id("ReportCreated(address,uint,uint)")],
    };

    wssProvider.getLogs({ ...filter, fromBlock: 16220775 }).then((events) => {
      setCount(events.length + 1);
    });

    const provider = new ethers.WebSocketProvider(
      import.meta.env.VITE_WSS_RPC_URL
    );
    provider.on(filter, trackingReports);

    return () => {
      // Perform cleanup
      provider.off(filter, trackingReports);
    };
  }, [fetchUserDetails, trackingReports, count]);

  return userDetails;
};

export default useGetUserDetails;
