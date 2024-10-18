import whistleImage from "../assets/whistleImage.svg";
import vector from "../assets/vector.svg";
import useGetAllReports from "../Hooks/useGetAllReports";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reports = () => {
  const allReports = useGetAllReports();

  const categories = [
    "Corruption",
    "Harassment",
    "Discrimination",
    "Violence",
    "Fraud",
    "Others",
  ];

  const handleReport = () => {
    return toast.error("Connect your wallet to proceed!", {
      position: "top-center",
    });
  }

  return (
    <main className="w-[100vw] bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A]">
      <section className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A]">
        <div className="w-screen bg-[#040927]">
          <div className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `url(${vector})`,
              backgroundSize: "cover",

            }}>
            <h1 className=" text-white lg:text-[38px] md:text-[38px] text-[30px] font-titiliumweb font-[700] my-4">
              Empowering Anonymous <span className="text-[#15BFFD]">Whistleblowing </span> with Blockchain
            </h1>
            <p className="text-white lg:text-[20px] md:text-[20px] text-[16px] text-center font-titiliumweb">
              Secure. Anonymous. Decentralized. Report misconduct
              <br />safely and help ensure transparency
            </p>
            <div className="mt-6">
              <button className="bg-[#15BFFD] rounded-3xl p-4 text-[#101415] mr-4 lg:text-[20px] md:text-[20px] text-[18px]" onClick={handleReport}>
                Whistleblow
              </button>
              <button className="border border-[#15BFFD] rounded-3xl p-4 text-white bg-transparent lg:text-[20px] md:text-[20px] text-[18px]">
                Validate
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] h-full">
        <div className='lg:w-[90%] md:w-[90%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0'>
          <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap'>
            <div className="flex lg:flex-row md:flex-row flex-col justify-between my-10 flex-wrap">
              {allReports.map((info) => {
                const categoryIndex = Number(info.category);
                const categoryName = categories[categoryIndex] || "Unknown";
                const detailsSnippet = info.details.split(' ').slice(0, 10).join(' ') + (info.details.split(' ').length > 20 ? '...' : '');

                return (
                  <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white rounded-xl border shadow-lg mb-4">
                    <img
                      src={whistleImage}
                      alt=""
                      className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                    />
                    <h3 className="font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px]  text-[#15BFFD]">
                      {info.title}
                    </h3>
                    <p className="flex gap-2 text-white">
                      Misconduct: <span>{categoryName}</span>
                    </p>
                    <p className="text-white font-bold">{detailsSnippet}</p>
                    <button className=" bg-[#15BFFD] my-4 border w-[100%] py-2 px-4 border-[#15BFFD] text-[#101415] rounded-3xl">
                      View details
                    </button>
                  </div>
                );
              })}
            </div>


          </div>
        </div>
      </section>
    </main>
  );
};

export default Reports;
