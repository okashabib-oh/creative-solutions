import React from "react";

const CustomMobile = () => {
    return (
        <div className="pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between relative w-full h-full">
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto bg-cover bg-center relative">
                    <img
                        src="/assets/smartphone-laptop.8880a6e7.svg"
                        alt="Smartphone and Laptop"
                        className="hidden lg:block w-full h-full object-cover"
                    />
                    <div
                        className="lg:hidden absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/assets/smartphone-laptop.8880a6e7.svg')",
                        }}
                    ></div>
                </div>

                <div className="flex flex-col justify-around text-white lg:pl-8 space-y-6 bg-gradient-to-r from-[#001C69] to-[#000B31] bg-opacity-90 lg:bg-transparent z-10 p-6 lg:p-8 lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mx-auto lg:mx-0 lg:w-[90%]">
                        Custom Mobile Application Development Services - Built for You
                    </h1>
                    <p className="text-sm font-thin sm:text-base lg:text-lg mx-auto lg:mx-0 lg:w-[90%]">
                        Businesses nowadays cannot function without mobile apps, and we are experts in creating unique
                        mobile applications that maximize the potential of your brand. From an intuitive interface to
                        robust features, we make sure your software accomplishes its intended tasks. We build custom
                        applications that enable the growth of your company. Every app created by us is designed to
                        tackle specific issues or explore new opportunities.
                    </p>
                    <div>
                        <button className="font-bold text-white bg-[#0099FF] w-36 h-12 hover:bg-white hover:text-[#0099FF] transition-all duration-300 ease-in-out transform hover:scale-110">
                            Work with Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomMobile;
