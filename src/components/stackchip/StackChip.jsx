import React from "react";

const StackChip = ({ text, isSelected, onClick }) => {
  return (
    <div
      className={`w-40 font-bold h-14 flex items-center justify-center rounded-full ${
        isSelected ? "bg-[rgb(0,32,120)]" : "bg-[rgb(222,222,222)]" // Conditionally change background color
      }`}
    >
      <button
        className={`text-center text-${isSelected ? "white" : "black"}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default StackChip;