

const Reports = () => {
    return (
        <main>
            <div className="w-screen bg-[#040927]">
                <div className="lg:w-[70%] md:w-[70%] w-[100%] mx-auto text-center my-12 px-4 lg:px-0 md:px-0 border-2 border-white">
                    <h1 className="lg:text-[50px] md:text-[50px] text-[28px] font-[700] my-4">
                        Empowering Anonymous <span className="text-[#15BFFD]">Whistleblowing </span> with Blockchain
                    </h1>
                    <p className="lg:text-[24px] md:text-[24px] text-[18px] text-[#0F160F]/80">
                        Secure. Anonymous. Decentralized. Report misconduct
                        safely and help ensure transparency
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
        </main>
    );
};

export default Reports;
