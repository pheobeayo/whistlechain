import Sidebar from "../components/Sidebar";
import { Outlet, Navigate } from "react-router-dom";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import MobileSidebar from "../components/MobileSidebar";
import Basename from "../components/Basename";

const DashboardLayout = () => {
  const { isConnected } = useWeb3ModalAccount()

  return !isConnected ? (
    <Navigate to={"/"} />
  ) : (
      <div className="flex bg-[#040927]">
        <Sidebar />
        <div className="px-6 w-[100vw] lg:w-[77%] md:w-[77%] h-auto lg:h-[100vh] md:h-[80vh] overflow-y-scroll mx-auto">
          <MobileSidebar />
          <div className="lg:flex md:flex justify-end my-6 hidden ml-auto">
          <Basename />
          </div>
          <Outlet />
        </div>
      </div>
  );
};

export default DashboardLayout;
