import React from 'react';

const Call = () => {
    return (
        <div className="pb-10">
            {/* Call to Action Section */}
            <div className="bg-[#09f] rounded-xl overflow-hidden flex md:justify-center flex-wrap items-center w-[85%] mx-auto justify-between px-6 lg:px-10">
                {/* Text Content */}
                <div className="lg:w-1/2 w-full text-center lg:text-start">
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6 md:pt-6">
                        Ready To Take The Next Step? Consult Our Experts Right Away!
                    </h1>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <button className="text-white font-bold w-40 h-12 bg-gradient-to-r from-[#001C69] to-[#000B31] hover:scale-110 transition-all duration-300">
                            Book A Zoom Call
                        </button>
                        <button className="text-white font-bold w-40 h-12 border-2 border-white hover:bg-gradient-to-r from-[#001C69] to-[#000B31] hover:border-none transition-all duration-300">
                            Schedule A Call
                        </button>
                    </div>
                </div>
                {/* Image */}
                <div className="w-full lg:w-auto mt-6 lg:mt-0">
                    <img
                        src="/assets/analytics.8d75d6b2.svg"
                        alt="Analytics"
                        className="w-[90%] lg:w-[550px] mx-auto hover:scale-110 transition-all duration-300"
                    />
                </div>
            </div>

            {/* Additional Content Section */}
            <div className="space-y-6 flex flex-col items-center w-[90%] lg:w-[70%] mx-auto pt-10 text-center text-[#000724]">
                <h1 className="text-3xl lg:text-4xl font-bold">
                    Have A Project To Discuss? We Are Ready!
                </h1>
                <p className="text-lg">
                    Our Experts Are Available At Your Service Round The Clock, Ensuring An Experience Like Never Before.
                </p>
                <button className="w-40 h-12 bg-gradient-to-r from-[#001C69] to-[#000B31] hover:scale-110 transition-all duration-300 text-white font-bold">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Call;
