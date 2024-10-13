import React from "react";
import {
  Avatar,
  Identity,
  Name,
  Badge,
  Address,
} from "@coinbase/onchainkit/identity";
import {
    useWeb3ModalAccount
  } from "@web3modal/ethers/react";

const Basename = () => {
    const { address } = useWeb3ModalAccount()
  return (
    <Identity
      address={address}
      schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
    >
      <Avatar />
      <Name>
        <Badge />
      </Name>
      <Address />
    </Identity>
  );
};

export default Basename;
