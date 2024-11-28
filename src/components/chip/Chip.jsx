import React from 'react'

const Chip = ({ text }) => {
    return (
        <>
            <div className='w-[46%] md:w-52 font-bold bg-[#F8F8F8] text-[#393939] h-14 items-center hover:border-[#0099FF] hover:border-2 rounded-md hover:bg-white flex justify-center'>
                {text}
            </div>
        </>
    )
}

export default Chip