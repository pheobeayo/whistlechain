import whistleImage from "../../assets/whistleImage.svg";
import { FaArrowUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

const WhistleDetails = () => {




  return (
    <main className='bg-[#040927]'>
      <div className='w-[95%] mx-auto p-8'>
        <div className="flex lg:flex-row md:flex-row flex-col gap-2 my-4">
          <div className="relative w-[40%]">
            <input
              className="appearance-none bg-transparent border-2 pl-10 border-white hover:border-[#15BFFD] transition-colors rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-[#15BFFD] focus:border-[#15BFFD] focus:shadow-outline p-4"
              id="username"
              type="text"
              placeholder="Track Reports"
            />


            <div className="absolute left-0 inset-y-0 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div>
            <button className='bg-[#15BFFD] w-[100%] py-2 text-white mb-2 rounded-3xl p-4' >Track</button></div>
        </div>
        <section className='flex lg:flex-row md:flex-row flex-col justify-between'>
          <div className='lg:w-[45%] md:w-[45%] w-[100%] border-gradient-to-r  from-[#69EACB] via-[#EACCF8] to-[#6654F1]  border-2 rounded-lg p-4'>
            <img src={whistleImage} alt="" className='rounded-lg w-[100%]' />
            <h3 className='font-bold mt-4 text-[#15BFFD] lg:mt-0 md:mt-0 lg:text-[24px] md:text-[24px] text-[20px] capitalise font-titiliumweb'>Unauthorized Financial Transaction and activities</h3>
            <p className='flex gap-2 text-white my-4'>Misconduct: <span>Fraud</span></p>
            <p className='font-bold mt-4 my-4 text-white lg:mt-0 md:mt-0 lg:text-[20px] md:text-[20px] text-[16px] font-titiliumweb'>On October 5, 2024, I witnessed an unauthorized transfer of funds by Mr. John Doe without management approvalOn October 5, 2024, I witnessed an unauthorized transfer of funds by
              Mr. John Doe without management approval
            </p>
            <button className='bg-[#15BFFD] w-[100%] py-2 text-white mb-4 rounded-3xl' >Message</button>
          </div>
          <div className=' lg:w-[52%] md:w-[52%] w-[100%]'>
            <h3 className='font-bold mt-4 text-[#15BFFD] lg:mt-0 md:mt-0 lg:text-[24px] md:text-[24px] text-[20px] capitalise font-titiliumweb'>Unauthorized Financial Transaction and activities</h3>
            <p className='text-white lg:text-[20px] md:text-[20px] text-[16px] font-bold font-titiliumweb'>Description</p>
            <p className='mt-4 text-white text-justify lg:mt-0 md:mt-0 lg:text-[20px] md:text-[20px] text-[16px]  font-titiliumweb'>On October 5, 2024, I witnessed an unauthorized transfer of funds by Mr. John Doe without management approval. The transaction involved a significant sum being moved from the companys primary account to an external account
              not listed in the approved vendor or beneficiary list.
              This transfer was conducted outside of regular business hours, and no prior notification or authorization from the finance or management team was observed. Upon noticing the transaction, I confirmed with relevant personnel, who had no
              knowledge or documentation of this transfer being sanctioned.</p>
            <p className='flex gap-2 my-4 text-white'>Misconduct: <span>Fraud</span></p>
            <div className="flex gap-2"><button className='bg-transparent w-[30%] py-2 text-white mb-4 rounded-3xl border-white border-2 flex gap-2 p-4 place-content-center' > <FaArrowUp /> Upvote</button>
              <button className='bg-transparent w-[30%] py-2 text-white mb-4 rounded-3xl border-white border-2 flex gap-2 p-4 place-content-center' > <FaLongArrowAltDown />Downvote</button></div>
          </div>
        </section></div>


    </main>
  )
}

export default WhistleDetails