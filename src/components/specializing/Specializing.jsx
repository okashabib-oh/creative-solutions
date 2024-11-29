import React from 'react'

const Specializing = () => {

    const cardsData = [
        {
            logo: '/assets/custom-software-dev.daa4ae1d.svg',
            name: 'Custom Software',
            nameTwo: 'Development',
            description: 'Elevate your business with our custom software development services tailored to your unique needs. We work closely with you to create solutions that streamline operations, and drive growth.'
        },
        {
            logo: '/assets/mobileapp-dev.1a20a3a7.svg',
            name: 'Mobile App',
            nameTwo: 'Development',
            description: 'Transform your ideas into powerful mobile applications tailored to your business needs. Our team crafts user-friendly and scalable apps that engage users and drive results across all platforms.'
        },
        {
            logo: '/assets/backend-dev.492532a7.svg',
            name: 'Backend',
            nameTwo: 'Development',
            description: 'Our backend development services ensure that your application runs smoothly and securely, providing the robust infrastructure needed to handle complex operations, and integrations.'
        },
        {
            logo: '/assets/frontend-dev.4707eba1.svg',
            name: 'Frontend',
            nameTwo: 'Development',
            description: 'Enhance user experience with our expert frontend development services. We build visually stunning and intuitive interfaces that captivate users, ensuring your app stands out.'
        },
        {
            logo: '/assets/ui-ux-design.bfdb9b64.svg',
            name: 'UI/UX',
            nameTwo: 'Design',
            description: 'We design user-friendly interfaces that turn ideas into engaging digital experiences, making it easy for your customers and helping your business grow.'
        },
    ]

    return (
        <div className='pb-6'>
            <div className='space-y-4'>
                <h1 className='text-5xl font-bold text-center pt-12 text-[#000724] lg:w-[85%] mx-auto xl:w-2/3 2xl:w-1/2'>Company Specializing In Custom Software & Mobile App Development</h1>
                <p className='text-[#393939] w-[85%] mx-auto text-center w-[85%] xl:w-2/3 mx-auto text-sm md:text-lg'>As we move into a digital future, every online interaction becomes a valuable opportunity to connect brands with their audiences in meaningful ways. Specializing in custom mobile app development,
                    we offer a wide range of software solutions that empower businesses to build a strong digital presence and thrive in today’s competitive environment.</p>
                <div className='flex justify-center flex-wrap gap-4'>
                    {cardsData.map((items, ind) => (
                        <div key={ind} className='flex flex-col border-2 border-black items-center justify-center py-4 space-y-2'>
                            <img src={items.logo} width={150} height={150} alt="" />
                            <h5 className='text-bold text-2xl text-[#000724]'>{items.name}</h5>
                            <h5 className='text-bold text-2xl text-[#000724]'>{items.nameTwo}</h5>
                            <p className='py-4 text-center w-80 px-6'>
                                {items.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Specializing