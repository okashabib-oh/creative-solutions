const Hero = () => {

    const image = '/assets/727.png'

    return (
        <div>
            <div style={{
                backgroundImage: `url(${image})`
            }}
                className="w-full lg:h-[100vh] bg-no-repeat bg-cover bg-center">
                <div className="flex flex-wrap w-[90%] mx-auto items-center">
                    <div className="flex flex-col space-y-8 lg:w-[60%] text-white w-[90%]">
                        <div className="lg:w-[50%] mx-auto">
                            <h1 className="text-3xl lg:text-5xl font-bold">Welcome to Creative Solutions, Your Go-To Source for Tailored</h1>
                            <h1 className="text-3xl lg:text-5xl font-bold text-[#0099FF]">Software Development!</h1>
                        </div>
                        <div>
                            <p className="font-thin lg:w-[50%] mx-auto">We at Creative Solutions know that off-the-shelf solutions aren't always good enough.
                                For this reason,
                                we provide custom software application development
                                based on your particular company's requirements.
                            </p>
                        </div>
                        <div>
                            <button className="py-4 px-6 text-center font-bold bg-[#0099FF] cursor-pointer transition-all duration-300 hover:bg-[#0099ffbe] hover:scale-110">
                                Schedule a Call
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/nerssnse.svg" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full"></div>
        </div>
    );
};

export default Hero;
