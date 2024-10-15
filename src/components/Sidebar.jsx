import { CgHomeAlt } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
import { TbSettings } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';
import { useDisconnect } from "@web3modal/ethers/react";
import { LuMessagesSquare } from "react-icons/lu";
import { RiKakaoTalkFill } from "react-icons/ri";

const Sidebar = () =>  {
  const { disconnect } = useDisconnect()
 
  const activeStyle = {
    borderLeft: '1px solid #61CEF6',
    borderRight: '1px solid #61CEF6',
    width: '100%',
    padding: '20px'
  };

  return (
    <div className='bg-[#040927] w-[20%] text-[rgb(15,22,15)] p-8 py-12 h-[100vh] hidden lg:flex md:flex flex-col border-x border-white '>
      <img src={logo} alt='logo'className="mb-20" />
      <NavLink to="/dashboard" className="text-[14px] text-white flex items-center py-4 mb-4 px-4 hover:text-[#15BFFD]" style={({isActive}) => isActive ? activeStyle : null } end><CgHomeAlt className="mr-4" />Dashboard</NavLink>
      <NavLink to="reportUpdate" className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#15BFFD]" style={({isActive}) => isActive ? activeStyle : null }><BiBox className="mr-4" /> Reports</NavLink>
      <NavLink to="message" className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#15BFFD]" style={({isActive}) => isActive ? activeStyle : null }><LuMessagesSquare className="mr-4" /> Messages</NavLink>
      <NavLink to="submit-misconduct" className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#15BFFD]" style={({isActive}) => isActive ? activeStyle : null }><RiKakaoTalkFill className="mr-4" /> Make a Report</NavLink>
      <button className="bg-[#040927] text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#15BFFD]" onClick={() => disconnect()}><TbSettings className="mr-4"  /> Log out</button>
    </div>
  );
}

export default Sidebar;