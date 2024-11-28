import React from 'react'

const StackChip = ({ text }) => {
    return (
        <div className="w-40 font-bold bg-[rgb(0,32,120)] h-14 flex items-center justify-center rounded-full">
            <button className="text-center text-white">{text}</button>
        </div>
    )
}

export default StackChip