import Submit from "../assets/Submit.svg";

const SubmitMisConduct = () => {
    return (
        <main>
            <div className="w-screen bg-[#040927]">
                <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
                    <div className="lg:w-[45%] md:w-[45%] w-[100%] bg-[#272A4D] h-[50vw]">
                        <div className="grid place-items-center">
                            <img src={Submit} alt="" className="w-[70%] pt-8" />
                        </div>
                        <p className="lg:text-[20px] md:text-[20px] text-[15px] font-titiliumweb text-center text-white">
                            Empowering anonymous whistle blowing with blockchain
                        </p>
                    </div>
                    <div className="lg:w-[50%] md:w-[50%] w-[90%] p-8 bg-[#040927]">
                        <h1 className="text-3xl font-serif text-white font-bold mt-4 my-20">
                            Submit Misconduct Report
                        </h1>


                        <input
                            type="text"
                            placeholder="Title of misconduct"
                            className="bg-transparent border border-white text-white text-sm font-bold rounded-lg focus:ring-[#15BFFD] focus:border-[#15BFFD] block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                        <input
                            type="text"
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
                                placeholder="Description of the misconduct"
                                className=" bg-transparent block  rounded-lg border-0 py-2.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#15BFFD] w-3/4 sm:text-sm sm:leading-6"
                            >
                                <option>Fraud</option>
                                <option>Bribery & Corruption</option>
                                <option>Violence</option>
                                <option>Abuse/Harrasment</option>
                                <option>Discrimination</option>
                                <option>Others (Specify)</option>

                            </select>
                        </div>
                        <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
                            Evidence to support claim
                        </label>

                        <input
                            type="text"
                            placeholder="Add an evidence to support your claim"
                            className="bg-transparent font-bold border border-white text-white text-sm rounded-lg focus:ring-[#15BFFD] focus:border-[#15BFFD] block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
                            readOnly
                        />

                        <div className="relative mb-4">
                            <input
                                type="file"
                                placeholder="Add an evidence to support your claim"
                                className={`bg-transparent font-bold border border-white text-white text-sm rounded-lg focus:ring-[#15BFFD] focus:border-[#15BFFD] block w-3/4 p-2.5 backdrop-blur-lg outline-none  cursor-not-allowed`}

                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-50 rounded-lg">
                                <div className="loader"></div> {/* Add your loading spinner here */}
                            </div>

                        </div>
                        <button
                            className="bg-[#15BFFD] hover:bg-[transparent] text-[#101415] py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-3/4 my-4 rounded-3xl"

                        >
                            Submit
                        </button>
                    </div>
                </div>

            </div>

        </main>
    );
};

export default SubmitMisConduct;
