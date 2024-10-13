import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getWhistleChainContract } from "../constants/contract";
import { wssProvider } from "../constants/providers";
import { ethers } from "ethers";

const useGetAllReports = () => {
  const [allReports, setAllReports] = useState([]);
  const [count, setCount] = useState(0);

  const fetchAllReports = useCallback(async () => {
    try {
      const contract = getWhistleChainContract(readOnlyProvider);
      const res = await contract.getAllReports();
      const converted = res?.map((item, index) => {
        return {
          id: item[0],
          address: item[1],
          title: item[2],
          details: item[3],
          category: item[4],
          downvote: item[5],
          upvote: item[6]
        };
      });
      setAllReports(converted);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const trackingReports = useCallback(() => {
    setCount((prevValue) => prevValue + 1);
    fetchAllReports();
  }, [fetchAllReports]);

  useEffect(() => {
    fetchAllReports();

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
  }, [fetchAllReports, trackingReports, count]);

  return allReports;
};

export default useGetAllReports;
