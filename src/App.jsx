import AllRoutes from "./config/AllRoutes";
import { configWeb3Modal } from "./connection";
import '@coinbase/onchainkit/styles.css';
import OnchainProviders from './components/OnchainProvider';
import React from "react";

configWeb3Modal();

function App() {
  return (
   <OnchainProviders>
       <AllRoutes/>
       </OnchainProviders>
  )
}

export default App
