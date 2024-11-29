const Hero = () => {
    const image = '/assets/727.png';

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${image})`,
                }}
                className="w-full h-[70vh] lg:h-[100vh] bg-no-repeat bg-cover bg-center"
            >
                <div className="flex flex-wrap w-[90%] mx-auto items-center justify-center lg:justify-between h-full">
                    <div className="flex flex-col space-y-6 lg:w-[50%] text-white text-center lg:text-left">
                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                                Welcome to Creative Solutions, Your Go-To Source for Tailored
                            </h1>
                            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0099FF]">
                                Software Development!
                            </h1>
                        </div>
                        <div>
                            <p className="font-thin text-sm sm:text-base lg:text-lg lg:w-[90%] mx-auto lg:mx-0">
                                We at Creative Solutions know that off-the-shelf solutions aren't always good enough.
                                For this reason, we provide custom software application development based on your
                                particular company's requirements.
                            </p>
                        </div>#076Acc
                        <div>
                            <button className="py-3 px-5 sm:py-4 sm:px-6 font-bold bg-[#0099FF] text-sm sm:text-base lg:text-lg cursor-pointer transition-all duration-300 hover:bg-[#0099ffbe] hover:scale-110">
                                Schedule a Call
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-[40%] md:w-[35%] sm:w-[50%] w-[70%] mx-auto mt-8 lg:mt-0">
                        <img src="/assets/nerssnse.svg" alt="Illustration" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
