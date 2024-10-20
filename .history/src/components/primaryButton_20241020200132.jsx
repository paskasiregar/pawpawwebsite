import React from "react";

const PrimaryButton = ({ children, onClick, href }) => {
  return (
    <button
      className="bg-inherit-320071 text-white font-bold py-2 px-4 rounded-lg w-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
