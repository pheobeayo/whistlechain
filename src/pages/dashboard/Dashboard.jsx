import useGetAllReports from "../../Hooks/useGetAllReports";
import useGetUserDetails from "../../Hooks/useGetUserDetails";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const Dashboard = () => {
  const allReports = useGetAllReports();
  const userDetails = useGetUserDetails();
  const { address } = useWeb3ModalAccount();
  console.log(allReports);

  const categories = [
    "Corruption",
    "Harassment",
    "Discrimination",
    "Violence",
    "Fraud",
    "Others",
  ];

  const subscription = ["Free", "Weekly", "Monthly", "Yearly"];

  return (
    <main className="bg-[#040927] w-[100%] h-full">
      <div className="rounded-lg border border-white py-4 px-8 text-white flex justify-between items-center lg:flex-row md:flex-row flex-col">
        <p className="text-[20px] font-bold">
          Profile <br /> Details
        </p>
        <p>Subscription Plan: {subscription[Number(userDetails[0])]}</p>
        <p>Report Count: {Number(userDetails[1])}</p>
        <p>Vote Count: {Number(userDetails[2])}</p>
      </div>
      <div className="w-[95%] mx-auto p-8">
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
            <button className="bg-[#15BFFD] w-[100%] py-2 text-white mb-2 rounded-3xl p-4">
              Track
            </button>
          </div>
        </div>
        <div className="w-full border-white p-8 rounded-lg">
          <h3 className="font-medium mt-4 text-white lg:mt-0 md:mt-0 lg:text-[24px] md:text-[24px] text-[20px] capitalise font-serif">
            All Reports Submitted
          </h3>
          <table className="table-fixed  border border-400 rounded-2xl  border-spacing-2 w-[100%]">
            <thead className="p-4">
              <tr className="text-white font-serif font-normal">
                <th className="border border-white">Report ID</th>
                <th className="border border-white">Reports</th>
                <th className="border border-white">Misconduct</th>
                <th className="border border-white">Track </th>
              </tr>
            </thead>
            <tbody className="text-white p-4">
              {allReports.length > 0 ? (
                allReports.map((info) => {
                  const categoryIndex = Number(info.category);
                  const categoryName = categories[categoryIndex] || "Unknown";

                  return info.address === address ? (
                    <tr className="font-serif font-normal" key={info.id}>
                      <td className="border border-white font-serif font-normal">
                        WCW-IV-00{Number(info.id)}
                      </td>
                      <td className="border border-white">{info.title}</td>
                      <td className="border border-white">{categoryName}</td>
                      <td className="border border-white">Track Status</td>
                    </tr>
                  ) : null;
                })
              ) : (
                <tr>
                  <td colSpan={4} className="border border-white text-center">
                    No Reports yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
