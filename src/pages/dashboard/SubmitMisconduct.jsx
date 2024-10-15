import Submit from "../../assets/Submit.svg";
import { ethers } from "ethers";
import { getProvider } from "../../constants/providers";
import { isSupportedChain } from "../../connection/index";
import { getWhistleChainContract } from "../../constants/contract";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const SubmitMisConduct = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [title, setTitle] = useState("");
  const [reportDescription, setReportDescription] = useState("");
  const [category, setCategory] = useState(null);

  async function handleCreateReport() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getWhistleChainContract(signer);

    try {
      const transaction = await contract.createReport(
        title,
        reportDescription,
        category
      );
      const receipt = await transaction.wait();

      if (receipt.status) {
        return toast.success("Report Creation Successful!", {
          position: "top-center",
        });      
      }
      toast.error("Report Creation Failed!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Report Creation Failed!", {
        position: "top-center",
      });
    } finally {
      setCategory("");
      setTitle("");
      setReportDescription("");
    }
  }

  return (
    <main>
      <div className="bg-[#040927]">
        <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
          <div className="lg:w-[45%] md:w-[45%] w-[100%] bg-[#272A4D] py-6 rounded-lg">
            <div className="grid place-items-center">
              <img src={Submit} alt="" className="w-[55%] pt-8" />
            </div>
            <p className="lg:text-[20px] md:text-[20px] text-[15px] font-titiliumweb text-center text-white">
              Empowering anonymous whistle blowing with blockchain
            </p>
          </div>
          <div className="lg:w-[50%] md:w-[50%] w-[90%] p-8 bg-[#040927]">
            <h1 className="lg:text-[24px] md:text-[24px] text-[20px] font-serif text-white font-bold mt-4 my-10">
              Submit Misconduct Report
            </h1>

            <input
              type="text"
              placeholder="Title of misconduct"
              onChange={(e) => setTitle(e.target.value)}
              className="bg-transparent border border-white text-white text-sm font-bold rounded-lg focus:ring-[#15BFFD] focus:border-[#15BFFD] block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
            />
            <textarea
              type="text"
              onChange={(e) => setReportDescription(e.target.value)}
              placeholder="Description of the misconduct"
              className="bg-transparent border border-white text-white text-sm font-bold rounded-lg focus:ring-[#15BFFD] focus:border-[#15BFFD] block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
            />
            <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
              Category
            </label>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Description of the misconduct"
                className=" bg-[#040927] block  rounded-lg border-0 py-2.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#15BFFD] w-3/4 sm:text-sm sm:leading-6"
              >
                <option value={''} >Select a category---</option>
                <option value={4}>Fraud</option>
                <option value={0}>Corruption</option>
                <option value={3}>Violence</option>
                <option value={1}>Abuse/Harrasment</option>
                <option value={2}>Discrimination</option>
                <option value={5}>Others (Specify)</option>
              </select>
            </div>
            <button onClick={handleCreateReport} className="bg-[#15BFFD] text-[#101415] py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-3/4 my-4 rounded-3xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SubmitMisConduct;
