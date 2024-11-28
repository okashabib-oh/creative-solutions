import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
    const icons = [
        "/assets/group370.svg",
        "/assets/group371.svg",
        "/assets/group372.svg",
        "/assets/group373.svg",
    ];
    const services = [
        "Mobile App Development",
        "Frontend Development",
        "Backend Development",
        "UI/UX Design",
    ];
    const usefulLinks = [
        "Home",
        "Services",
        "Our Blogs",
        "Contact Us",
        "Terms & Conditions",
        "Privacy Policy",
    ];
    return (
        <div className="bg-gradient-to-r from-[#001C69] to-[#000B31] text-white">
            <div className="flex flex-wrap justify-between items-start w-[90%] mx-auto py-8 gap-8">
                <div className="w-full md:w-1/4 text-center space-y-8">
                    <h1 className="text-4xl font-bold sm:w-[40%] sm:mx-auto">Let's Work Together</h1>
                    <button className="w-40 h-12 bg-[#0099FF] hover:bg-[#0099ffc9] hover:scale-110 transition-all duration-300 text-lg">
                        Start a Project
                    </button>
                    <div className="flex justify-center gap-2">
                        {icons.map((icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="p-2 rounded-full hover:border-none hover:scale-110 transition-all duration-300"
                            >
                                <img src={icon} alt="socials" className="w-8 h-12" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/4 space-y-4">
                    <h1 className="font-bold text-[#0099FF] text-xl">Connect with us</h1>
                    <p className="flex space-x-2">
                        <PlaceIcon className="text-[#0099FF]" />
                        <a href='#' className='hover:underline hover:text-[#09f]'>R-402, 1st Floor, Inchauli Cooperative Housing Society, Karachi, Pakistan.</a>
                    </p>
                    <p className="flex space-x-2">
                        <PhoneIcon className="text-[#0099FF]" />
                        <span>
                            <a href="#" className="hover:underline hover:text-[#0099FF]">+92-3452487621</a>,{' '}
                            <a href="#" className="hover:underline hover:text-[#0099FF]">+92-3312640611</a>
                        </span>
                    </p>
                    <p className="flex space-x-2">
                        <MailIcon className="text-[#0099FF]" />
                        <a href="mailto:info@creative-sol.com" className="hover:underline hover:text-[#0099FF]">info@creative-sol.com</a>
                    </p>
                </div>

                <div className="w-full md:w-1/5 space-y-3">
                    <h1 className="font-bold text-[#0099FF] text-xl">Services</h1>
                    {services.map((service, index) => (
                        <a key={index} href="#" className="block hover:underline hover:text-[#0099FF]">
                            {service}
                        </a>
                    ))}
                </div>

                <div className="w-full md:w-1/5 space-y-3">
                    <h1 className="font-bold text-[#0099FF] text-xl">Useful Links</h1>
                    {usefulLinks.map((link, index) => (
                        <a key={index} href="#" className="block hover:underline hover:text-[#0099FF]">
                            {link}
                        </a>
                    ))}
                </div>
            </div>

            <div className="py-2 border-t border-[#707070]">
                <p className="text-center text-sm">
                    Copyright © 2014 - 2024,{' '}
                    <a href="/" className="text-[#0099FF] hover:underline">
                        Creative Solutions.
                    </a>{' '}
                    All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
