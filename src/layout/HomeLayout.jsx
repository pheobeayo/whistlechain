import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, Navigate } from 'react-router-dom'
import {
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";

const HomeLayout = () => {
  const { isConnected } = useWeb3ModalAccount()
  
  return isConnected ? <Navigate to={'/dashboard'} /> : (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout