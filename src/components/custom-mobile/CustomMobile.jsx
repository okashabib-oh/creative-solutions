import React from 'react'

const CustomMobile = () => {
    return (
        <div className='mix-color pt-8'>
            <div className='flex justify-between'>
                <div className='overflow-hidden'>
                    <img src="/assets/smartphone-laptop.8880a6e7.svg" alt="" />
                </div>
                <div className='flex flex-col justify-around pl-8 space-y-4'>
                    <h1 className='text-4xl w-[30%] md:w-[50%]'>Custom Mobile Application Development Services - Built for You</h1>
                    <p className='w-[40%] md:w-[80%]'>
                        Businesses nowadays cannot function without mobile apps, and we are experts in creating unique
                        mobile applications that maximize the potential of your brand.
                        From an intuitive interface to robust features,
                        we make sure your software accomplishes its intended tasks.
                        We build custom applications that enable the growth of your company.
                        Every app created by us is designed to tackle specific issues or explore new opportunities.
                    </p>
                    <div>
                        <button className='font-bold text-white bg-[#0099FF] w-36 h-12 hover:bg-white hover:text-[#0099FF] transition-all duration-300 ease-in-out transform hover:scale-110'>Work with Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomMobile