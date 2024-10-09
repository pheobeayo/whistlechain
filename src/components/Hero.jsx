import heroImage from "../assets/heroImage.svg";
import dao from "../assets/dao.svg";
import blockchain from "../assets/blockchain.svg";
import anonymous from '../assets/anonymous.svg';
import howImage from '../assets/howImage.svg';
import Purchase from '../assets/Purchase.svg';

const Hero = () => {
    return (
        <main className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A]">
            <section className="bg-gradient-to-r from-[#080B2A] via-[#2A3E84] to-[#080B2A]">

                <div>
                    <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
                        <div className="lg:w-[50%] md:w-[50%] w-[90%] p-16">
                            <h1 className="text-white font-titiliumweb lg:text-[72px] md:text-[72px] text-[60px] font-[700]">
                                Empowering
                                <br />Anonymous
                                <br /><span className='text-[#15BFFD]'>Whistleblowing</span>
                                <br />with Blockchain
                            </h1>
                            <p className="lg:text-[24px] md:text-[24px] text-[18px] font-titiliumweb text-white">
                                Secure. Anonymous. Decentralized. Report misconduct
                                safely and help ensure transparency.
                            </p>
                            <div className="mt-6">
                                <button className="bg-[#15BFFD] rounded-3xl p-4 text-[#101415] mr-4 lg:text-[20px] md:text-[20px] text-[18px]">
                                    Whistleblow
                                </button>
                                <button className="border border-[#15BFFD] rounded-3xl p-4 text-white bg-transparent lg:text-[20px] md:text-[20px] text-[18px]">
                                    Validate
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-[45%] md:w-[45%] w-[100%]">
                            <img src={heroImage} alt="" className="w-[100%]" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A]">
                <div className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto border border-white rounded-lg py-8 bg-[#171A3D]">
                    <div className="grid place-items-center"> <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700] text-white my-12 font-titiliumweb text-center lg:text-left md:text-left">
                        Features of WhistleChain
                    </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row md:flex-row justify-between">
                        <div className="py-6 lg:w-[30%] md:w-[30%] w-[90%] mx-auto mb-4">
                            <div className="grid place-items-center">
                                <img src={anonymous} alt='' />
                            </div>
                            <h3 className="lg:text-[24px] md:text-[24px] text-[18px] font-[700] font-titiliumweb mb-4 text-white text-center">
                                Anonymous Reporting
                            </h3>
                            <p className="text-white text-center lg:text-[20px] md:text-[20px] text-[18px]">
                                Submit reports without revealing your identity
                            </p>
                        </div>
                        <div className="py-6 lg:w-[30%] md:w-[30%] w-[90%] mx-auto mb-4">
                            <div className="grid place-items-center">
                                <img src={blockchain} alt='' />
                            </div>
                            <h3 className="lg:text-[24px] md:text-[24px] text-[18px] font-[700] font-titiliumweb mb-4 text-white text-center">
                                Blockchain Security
                            </h3>
                            <p className="text-white text-center lg:text-[20px] md:text-[20px] text-[18px]">
                                Blockchain Security: Immutable and tamper-proof storage.
                            </p>
                        </div>
                        <div className="py-6  lg:w-[30%] md:w-[30%] w-[90%] mx-auto mb-4">
                            <div className="grid place-items-center">
                                <img src={dao} alt='' />
                            </div>
                            <h3 className="lg:text-[24px] md:text-[24px] text-[18px] font-[700] font-titiliumweb mb-4 text-white text-center">
                                DAO Validation
                            </h3>
                            <p className="text-white text-center lg:text-[20px] md:text-[20px] text-[18px]">
                                Community-driven validation process through decentralized voting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] mt-16 ">
                <div className=" border-white rounded-lg lg:w-[90%] md:w-[90%] w-[100%] mx-auto border py-2 bg-[#171A3D]">
                    <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">

                        <ul className="text-white lg:w-[50%] md:w-[50%] w-[90%] p-8 text-justify">
                            <h1 className=" text-white lg:text-[30px] md:text-[30px] text-[20px] text-justify font-[600]" >How to use WhistleChain </h1>
                            <li className=" text-white lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4 text-justify">
                                Submit Report: Anonymously report misconduct with detailed evidence.
                            </li>
                            <li className=" text-white lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4">
                                DAO Voting: Validators review and vote on the credibility of the repor
                            </li>
                            <li className=" text-white lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4">

                                Status Updates: Track report status and engage with DAO members.
                            </li>
                            <li className="text-white lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4">
                                Rewards: Earn WC Tokens when your report is validated.
                            </li>
                        </ul>

                        <div className="lg:w-[45%] md:w-[45%] w-[100%]">
                            <img
                                src={howImage}
                                alt="howImage"
                                className="w-[100%] p-12"
                            />
                        </div>
                    </div>
                </div>
            </div >
            <div className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] mt-16 ">
                <div className=" border-white rounded-lg lg:w-[90%] md:w-[90%] w-[100%] mx-auto border py-2 bg-[#171A3D]">
                    <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
                        <div className="lg:w-[45%] md:w-[45%] w-[100%]">
                            <img
                                src={Purchase}
                                alt=" "
                                className="w-[100%] p-12"
                            />
                        </div>
                        <div className="text-white lg:w-[50%] md:w-[50%] w-[90%] p-8 text-justify">
                            <h1 className=" text-white lg:text-[30px] md:text-[30px] text-[20px] text-justify font-[600]" >Purchase Token </h1>
                            <h2 className=" text-white lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4 text-justify">
                                You can purchase tokens (WC tokens) to unlock unlimited reporting, voting, and priority access to critical reports, with weekly, monthly, and yearly subscription options
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
            </div >
        </main>
    );
};

export default Hero;
