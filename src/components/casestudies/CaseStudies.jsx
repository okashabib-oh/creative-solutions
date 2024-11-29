import React from 'react'

const CaseStudies = () => {

    const images = [
        "/assets/camcovers.0989843a.svg",
        "/assets/camcovers.0989843a.svg",
        "/assets/camcovers.0989843a.svg",
        "/assets/camcovers.0989843a.svg",
    ]

    return (
        <div className='space-y-4 pt-4 text-center'>
            <h1 className='text-5xl font-bold'>Case Studies</h1>
            <p className='px-4 text-[#393939] md:text-lg lg:w-[80%] xl:w-[75%] lg:mx-auto'>
                Our dedicated team of agile developers and project managers works closely with clients to deliver effective solutions.
                We use a clear and structured approach that fosters collaboration,
                making the entire process seamless and tailored to meet your needs.
            </p>
            <div className='flex justify-center flex-wrap gap-4 w-[90%] mx-auto'>
                {images.map((item, ind) => (
                    <div key={ind} className='sm:w-[60%] md:w-[50%] lg:w-[35%] overflow-hidden'>
                        <img src={item} alt='Image' className='cursor-pointer w-full h-full object-fill transition-all duration-300 hover:scale-110' />
                    </div>
                ))}
            </div>
            <div className='flex justify-center lg:hidden'>
                <button className='w-30 px-4 h-14 flex items-center font-bold transition-all duration-300 text-white bg-gradient-to-r from-[#001C69] to-[#000B31] hover:bg-gradient-to-b hover:scale-110'>View More Case Studies</button>
            </div>
        </div>
    )
}

export default CaseStudies