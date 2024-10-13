import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";


const Home = lazy(() => import("../pages/Home"));
const HomeLayout = lazy(() => import('../layout/HomeLayout'));
const SubmitMisConduct = lazy(() => import('../pages/SubmitMisconduct'))
const DashboardLayout = lazy(() => import('../layout/DashboardLayout'));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const WhistleDetails = lazy(() => import("../pages/dashboard/WhistleDetails"));
const Message = lazy(() => import("../pages/dashboard/Message"));
const Reports = lazy(() => import("../pages/Reports"));
const ReportUpdate = lazy(() => import("../pages/dashboard/ReportUpdate"));
const Pricing = lazy(() => import("../pages/Pricing"));


const router = createBrowserRouter(createRoutesFromElements(

  <Route>
    <Route path="/" element={<HomeLayout />} >
      <Route index element={<Home />} />
      <Route path="/reports" element={<Reports />} />
      <Route path='/pricing' element={<Pricing/>}/>

    </Route>
    <Route path="/dashboard" element={<DashboardLayout />} >
      <Route index element={<Dashboard />} />
      <Route path="submit-misconduct" element={<SubmitMisConduct />} />
      <Route path="reportUpdate" element={<ReportUpdate />} />
      <Route path="reportUpdate/:id" element={<WhistleDetails />} />
      <Route path="message" element={<Message />} />
    </Route>
  </Route>
))



const AllRoutes = () => {


  return (
    <div className="w-full mx-auto bg-white  min-h-[100vh] font-opensans max-w-[1440px] text-[#0F160F]">
      <Toaster />
      <Suspense fallback={<PageLoader />}>

        <RouterProvider router={router} />

      </Suspense>
    </div>
  );
};

export default AllRoutes;