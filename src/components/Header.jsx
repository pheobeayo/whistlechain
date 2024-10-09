import  { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="py-8 bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] ">
      <div className="w-[90%] mx-auto lg:flex md:flex justify-between hidden">
        <img src={logo} alt="" className="w-[235px] h-[43px]" />
        <nav>
          <NavLink
            to="/"
            className="text-white hover:text-[#15BFFD] hover:font-[700] mr-10 text-[18px]"
          >
            Home
          </NavLink>
          <NavLink
            to="/marketplace"
            className="text-white hover:text-[#15BFFD] hover:font-[700] mr-10 text-[18px]"
          >
            Pricing
          </NavLink>
          <NavLink
            to="/reports"
            className="text-white hover:text-[#15BFFD] hover:font-[700] mr-10 text-[18px]"
          >
            Reports
          </NavLink>
          <NavLink
            to="/dashboard"
            className="text-white hover:text-[#15BFFD] hover:font-[700] mr-10 text-[18px]"
          >
            Dashboard
          </NavLink>
          
        </nav>
       
      </div>
      <div className="w-[95%] mx-auto flex justify-between lg:hidden md:hidden relative">
        <img src={logo} alt="" className="w-[185px] h-[43px]" />
        <Hamburger toggled={isOpen} toggle={setOpen} color="#427142" direction="right"/>
        {isOpen && (<nav className="flex flex-col bg-white p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] z-50">
          <NavLink
            to="/"
            className="text-white hover:text-[#15BFFD] hover:font-[700] mb-6 text-[18px]"
          >
            Home
          </NavLink>
          <NavLink
            to="/pricing"
            className="text-white hover:text-[#15BFFD] hover:font-[700] mb-6 text-[18px]"
          >
            Pricing
          </NavLink>
          <NavLink
            to="/reports"
            className="text-white hover:text-[#15BFFD] hover:font-[700] mb-6 text-[18px]"
          >
            Reports
          </NavLink>
          <NavLink
            to="/dashboard"
            className="text-white hover:text-[#15BFFD] hover:font-[700] mb-6 text-[18px]"
          >
            Dashboard
          </NavLink>
         
         
        </nav>)}
      </div>
    </header>
  );
};

export default Header;
