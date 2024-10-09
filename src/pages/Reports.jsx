import { Link } from 'react-router-dom';
import whistleImage from '../assets/whistleImage.svg';
import bribery from '../assets/bribery.svg';
import vector from '../assets/vector.svg';

const Reports = () => {
    return (
        <main className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A]">
            <section className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A]">
                <div className="w-screen bg-[#040927]">
                    <div className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0 border-2 border-white rounded-lg"
                    style={{
                        backgroundImage: `url(${vector})`,
                        backgroundSize: "30%",
                        backgroundPosition: "left bottom",
                      }}>
                        <h1 className=" text-white lg:text-[32px] md:text-[32px] text-[28px] font-[700] my-4">
                            Empowering Anonymous <span className="text-[#15BFFD]">Whistleblowing </span> with Blockchain
                        </h1>
                        <p className="text-white lg:text-[20px] md:text-[20px] text-[16px] text-center">
                            Secure. Anonymous. Decentralized. Report misconduct
                            <br />safely and help ensure transparency
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
                </div>
            </section>
            <section className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] h-full">
                <div className='lg:w-[90%] md:w-[90%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0'>
                <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap'>
                    <div className='lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white rounded-lg border-2 shadow-lg'>
                        <Link to={`/dashboard/whistle-details`} className='text-white' >
                            <img src={whistleImage} alt="" className='w-[100%] h-[237px] object-cover object-center rounded-lg' />
                            <h3 className='font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px]  text-[#15BFFD]'>Unauthorized Financial Transaction and activities</h3>
                            <p className='flex gap-2'>Misconduct <span>: Fraud</span></p>
                            <p className='text-white font-bold'>On October 5, 2024, I witnessed an unauthorized transfer of funds by Mr. John Doe without management approval </p>
                            <button className=' bg-[#15BFFD] my-4 border w-[100%] py-2 px-4 border-[#15BFFD] text-[#101415] rounded-3xl'>View  details</button>
                        </Link>
                    </div>
                    <div className='lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white border-2 rounded-lg shadow-lg'>
                        <Link to={`/dashboard/whistle-details`} className='text-white' >
                            <img src={bribery} alt="" className='w-[100%] h-[237px] object-cover object-center rounded-lg' />
                            <h3 className='font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px]  text-[#15BFFD]'>Unauthorized Financial Transaction and activities</h3>
                            <p className='flex gap-2'>Misconduct <span>:   Bribery & Corruption</span></p>
                            <p className='text-white font-bold'>On September 28, 2024, I witnessed Mr. Smith receiving a bribe from Vendor ABC to secure a contract </p>
                            <button className=' bg-[#15BFFD] my-4 border w-[100%] py-2 px-4 border-[#15BFFD] text-[#101415] rounded-3xl'>View  details</button>
                        </Link>
                    </div>
                    <div className='lg:w-[32%] md:w-[32%] w-[100%] p-4 border-2 border-white rounded-lg  shadow-lg'>
                        <Link to={`/dashboard/whistle-details`} className='text-white' >
                            <img src={whistleImage} alt="" className='w-[100%] h-[237px] object-cover object-center rounded-lg' />
                            <h3 className='font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px]  text-[#15BFFD]'>Unauthorized Financial Transaction and activities</h3>
                            <p className='flex gap-2'>Misconduct <span>: Fraud</span></p>
                            <p className='text-white font-bold'>On October 5, 2024, I witnessed an unauthorized transfer of funds by Mr. John Doe without management approval </p>
                            <button className=' bg-[#15BFFD] my-4 border w-[100%] py-2 px-4 border-[#15BFFD] text-[#101415] rounded-3xl'>View  details</button>
                        </Link>
                    </div>
                </div>
                </div>
            </section>
        </main>
    );
};

export default Reports;
