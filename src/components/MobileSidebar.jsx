import  { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { CgHomeAlt } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
import { TbSettings } from "react-icons/tb";
import { NavLink } from "react-router-dom";
// import { useDisconnect } from "@web3modal/ethers/react";
import logo from '../assets/logo.svg'

const MobileSidebar = () => {
  const [isOpen, setOpen] = useState(false);
  // const { disconnect } = useDisconnect()

  const activeStyle = {
    borderLeft: '1px solid #61CEF6',
    borderRight: '1px solid #61CEF6',
    width: '100%',
    padding: '20px'
  };

  return (
    <header className="lg:hidden md:hidden flex justify-between my-4 relative">
            <img src={logo} alt="" className="w-[150px] my-4" />
      <Hamburger toggled={isOpen} toggle={setOpen} color="#427142" direction="right"/>
      {isOpen && (
        <div className="bg-[#040927] text-[rgb(15,22,15)] p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-baseBlack/70 z-50">
            
          <NavLink
            to="/dashboard"
            className="text-[14px] text-white flex items-center py-4 my-4 px-4 hover:text-[#15BFFD]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            end
          >
            <CgHomeAlt className="mr-4" />
            Dashboard
          </NavLink>
          <NavLink
            to="whistle-details"
            className="text-[14px] text-white flex items-center py-4 my-4 px-4 hover:text-[#15BFFD]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            end
          >
            <CgHomeAlt className="mr-4" />
            Whistle Details
          </NavLink>
          <NavLink
            to="message"
            className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#15BFFD]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <BiBox className="mr-4" /> Messages
          </NavLink>
          <button className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#15BFFD]" >
            <TbSettings className="mr-4" /> Log out
          </button>
        </div>
      )}
    </header>
  );
};

export default MobileSidebar;
