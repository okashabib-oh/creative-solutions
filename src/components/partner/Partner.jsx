import React from 'react'

const Partner = () => {

    const partners = [
        {
            logo: '/assets/group441.494cbfeb.svg',
            name: 'Expertise',
            description: 'Together with years of expertise, our team of custom mobile app developers is dedicated to learning every unique aspect of your project and incorporating it within the product.'
        },
        {
            logo: '/assets/group472.af1cadab.svg',
            name: 'Unique Solutions',
            description: 'As a custom software application development company, we put a lot of effort into providing high-quality, customized solutions.'
        },
        {
            logo: '/assets/group485.97561df2.svg',
            name: 'Latest Tools And Technologies',
            description: "We use the latest technologies and tools at hand to create a solution that's not only unique but also reliable and scalable."
        },
        {
            logo: '/assets/group488.17f765af.svg',
            name: 'Meeting Deadlines',
            description: "Each team member has been working with iOS and Android platforms for years professionally. Thus, you'll be able to get your Android custom application solutions within quoted deadlines."
        },
        {
            logo: '/assets/group490.a3fa8d59.svg',
            name: 'Custom Solutions For Every Need',
            description: "Whether you require a simple employee management app or a complicated user-based app, we take pride in creating fast and engaging apps for all users."
        },
        {
            logo: '/assets/group492.58bbd5ea.svg',
            name: 'Your Success, Our Priority',
            description: "We focus on delivering software solutions that drive your business forward. Our dedicated team ensures seamless integration and outstanding performance for every project."
        },
        {
            logo: '/assets/group494.8a954589.svg',
            name: 'Flat Monthly Rate',
            description: "No surprises, pay the same monthly rate regardless of how many design requests you submit."
        },
        {
            logo: '/assets/group496.9c78d59d.svg',
            name: 'Tailored For You',
            description: "Designs are built from the ground up to ensure your designs optimally meet your goals."
        }

    ]

    return (
        <div className='mt-10'>
            <h1 className='text-4xl text-center font-bold mb-8'>Why Partner with Us for Your Software Needs?</h1>
            <div className='flex justify-center flex-wrap gap-2 gap-x-2 xl:gap-x-6 space-y-4 py-2 2xl:w-[90%] mx-auto'>
                {partners.map((items, ind) => (
                    <div key={ind} className='w-full sm:w-[70%] lg:w-[29%] xl:w-[24%] flex items-center rounded-3xl py-10 px-4 space-y-2 flex-col bg-gradient-to-r hover:bg-gradient-to-b transition-all duration-200 from-[#0099FF] to-[#002078] text-white'>
                        <div className='bg-white rounded-full w-20 h-20 flex justify-center items-center'>
                            <img src={items.logo} className='hover:scale-110 transition-all duration-300' width={40} height={40} />
                        </div>
                        <h1 className='font-bold'>{items.name}</h1>
                        <p className='text-sm px-4 text-center'>{items.description}</p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center py-2'>
                <button className='text-white flex items-center transition-all duration-300 bg-gradient-to-r from-[#001C69] to-[#000B31] hover:bg-gradient-to-b hover:scale-110 py-4 px-5 md:px-8 mt-8 font-bold flex gap-4'>Get started With us
                    <img className='w-10' src="/assets/arrow-icon.45878506.svg" width={60} height={25} />
                </button>
            </div>
        </div>
    )
}

export default Partner