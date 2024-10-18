import mark from "../assets/mark.svg";
import Purchase from "../assets/Purchase.svg";

const Pricing = () => {
  return (
    <main className="w-[100vw] bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A]">
      <section className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A]">
        <div className="w-screen bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A]">
          <div className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0 ">
            <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
              <div className="bg-[#040927] lg:w-[45%] md:w-[45%] w-[100%] border-gradient-to-r  from-[#69EACB] via-[#EACCF8] to-[#6654F1]  border rounded-2xl p-16">
                <h3 className="font-bold mt-4 text-white lg:mt-0 md:mt-0 lg:text-[24px] md:text-[24px] text-[20px] font-titiliumweb text-left">
                  {" "}
                  Freemium Plan
                </h3>
                <p className="flex gap-2 text-white my-4 text-justify">
                  <img src={mark} alt="" />
                  <span>
                    Whistleblowers: Can submit only one report per day
                  </span>
                </p>
                <p className="flex gap-2 text-white my-4 text-justify">
                  <img src={mark} alt="" />
                  <span>
                    DAO Validators: Can vote on up to three reports daily
                  </span>
                </p>
                <p className="flex gap-2 text-white my-4 text-justify">
                  <img src={mark} alt="" />
                  <span>
                    Limited Access: Users need to purchase tokens to
                    <br /> access more reports or to increase their daily voting
                    limit
                  </span>
                </p>
              </div>
              <div className="bg-[#040927] lg:w-[45%] md:w-[45%] w-[100%] border-gradient-to-r  from-[#69EACB] via-[#EACCF8] to-[#6654F1]  border rounded-2xl p-5">
                <h3 className="font-bold mt-4 text-white lg:mt-0 md:mt-0 lg:text-[24px] md:text-[24px] text-[20px] text-left font-titiliumweb">
                  {" "}
                  Premium Plan
                </h3>
                <p className="flex gap-2 text-white my-4 text-justify">
                  <img src={mark} alt="" />
                  <span>
                    Whistleblowers: Unlimited report submissions. Access
                    additional privacy settings, selecting specific audiences or
                    groups within the DAO who can view and validate their
                    reports
                  </span>
                </p>
                <p className="flex gap-2 text-white my-4 text-justify">
                  <img src={mark} alt="" />
                  <span>DAO Validators: Unlimited daily voting.</span>
                </p>
                <p className="flex gap-2 text-white my-4 text-justify">
                  <img src={mark} alt="" />
                  <span>
                    Access to priority voting on critical or high-severity
                    reports
                  </span>
                </p>
                <p className="flex gap-2 text-white my-4 text-justify">
                  <img src={mark} alt="" />
                  <span>
                    Validators can track and prioritize reports that require
                    urgent investigation
                  </span>
                </p>
                <p className="flex gap-2 text-white my-4 text-justify">
                  <img src={mark} alt="" />
                  <span>Reward system for DAO</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] h-full">
        <div className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] mt-16 ">
          <div className=" border-white rounded-2xl lg:w-[90%] md:w-[90%] w-[100%] mx-auto border py-2 bg-[#171A3D]">
            <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
              <div className="lg:w-[45%] md:w-[45%] w-[100%]">
                <img src={Purchase} alt=" " className="w-[100%] p-12" />
              </div>
              <div className="text-white lg:w-[50%] md:w-[50%] w-[90%] p-8 text-justify">
                <h1 className=" text-white lg:text-[30px] md:text-[30px] text-[20px] text-justify font-[600]">
                  Purchase Token{" "}
                </h1>
                <h2 className=" text-white lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4 text-justify">
                  You can purchase tokens (WC tokens) to unlock unlimited
                  reporting, voting, and priority access to critical reports,
                  with weekly, monthly, and yearly subscription options
                </h2>
                <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center flex-wrap">
                  <div className="bg-transparent lg:w-[32%] md:w-[32%] w-[100%] p-4 border border-gray-200 rounded-lg mb-4 shadow-lg">
                    <h3 className="text-white font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] capitalise font-titiliumweb ">
                      Weekly plan
                    </h3>
                    <p className="text-white lg:text-[12px] md:text-[12px] text-[10px] font-normal text-justify">
                      $1 = 10 WC tokens(WCT)
                    </p>

                    <button className="bg-transparent hover:bg-[#15BFFD] text-[#15BFFD] font-bold py-2 px-4 border-[#15BFFD] rounded-3xl">
                      Purchase
                    </button>
                  </div>
                  <div className="bg-transparent lg:w-[32%] md:w-[32%] w-[100%] p-4 border border-gray-200 rounded-lg mb-4 shadow-lg">
                    <h3 className="text-white font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] capitalise font-titiliumweb ">
                      Monthly plan
                    </h3>
                    <p className="text-white lg:text-[12px] md:text-[12px] text-[10px] font-normal text-justify">
                      $3 = 30WC tokens(WCT)
                    </p>

                    <button className="bg-transparent hover:bg-[#15BFFD] text-[#15BFFD] font-bold py-2 px-4 border-[#15BFFD] rounded-3xl">
                      Purchase
                    </button>
                  </div>
                  <div className="bg-transparent lg:w-[32%] md:w-[32%] w-[100%] p-4 border border-gray-200 rounded-lg mb-4 shadow-lg">
                    <h3 className="text-white font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] capitalise font-titiliumweb ">
                      Yearly plan
                    </h3>
                    <p className="text-white lg:text-[10px] md:text-[10px] text-[9px] font-normal text-justify">
                      $30 = 300WC tokens(WCT)
                    </p>

                    <button className="bg-transparent hover:bg-[#15BFFD] text-[#15BFFD] font-bold py-2 px-4 border-[#15BFFD] rounded-3xl">
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
