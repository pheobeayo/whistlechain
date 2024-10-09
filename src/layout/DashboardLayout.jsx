import Sidebar from "../components/Sidebar";
import { Outlet} from "react-router-dom";

import MobileSidebar from "../components/MobileSidebar";

const DashboardLayout = () => {
  

  return(

    <div>
      <div className="flex bg-[#040927]">
        <Sidebar />
        <div className="px-6 w-[100%] lg:w-[77%] md:w-[77%] h-auto lg:h-[100vh] md:h-[80vh] overflow-y-scroll">
          <MobileSidebar />
          <div className="lg:flex md:flex justify-end my-6 hidden ml-auto">
            
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
