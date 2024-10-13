import useGetAllReports from "../../Hooks/useGetAllReports";
import useGetUserDetails from "../../Hooks/useGetUserDetails";

const Dashboard = () => {
    const allReports = useGetAllReports()
    const userDetails = useGetUserDetails()

    const categories = [
        "Corruption",
        "Harassment",
        "Discrimination",
        "Violence",
        "Fraud",
        "Others",
      ];

    const subscription = [ 'Free', 'Weekly', 'Monthly', 'Yearly' ]

  return (
    <main className="bg-[#040927] w-[100%] h-full">
       <div className="rounded-lg border border-white py-4 px-8 text-white flex justify-between items-center lg:flex-row md:flex-row flex-col">
            <p className="text-[20px] font-bold">Profile <br /> Details</p>
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
          <h3 className="font-bold mt-4 text-white lg:mt-0 md:mt-0 lg:text-[24px] md:text-[24px] text-[20px] capitalise font-titiliumweb">
            All Reports Submitted
          </h3>
          <table className="table-fixed border-separate border border-600 rounded-lg  border-spacing-2 w-[100%]">
            <thead className="p-4">
              <tr className="text-white">
                <th className="border border-white">ReportID</th>
                <th className="border border-white">Reports</th>
                <th className="border border-white">Misconduct</th>
                <th className="border border-white">Track </th>
              </tr>
            </thead>
            <tbody className="text-white p-4">
              {allReports.map((info) =>  {
                const categoryIndex = Number(info.category);
                const categoryName = categories[categoryIndex] || "Unknown";
                
              return  (<tr>
                <td className="border border-white">WCW-IV-00{Number(info.id)}</td>
                <td className="border border-white">
                  {info.title}
                </td>
                <td className="border border-white">{categoryName}</td>
                <td className="border border-white">Track Status</td>
              </tr>)})}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
