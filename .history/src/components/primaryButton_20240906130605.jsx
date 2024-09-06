import React from "react";

const PrimaryButton = ({ children, onClick, href }) => {
  return (
    <button
      className="bg-inherit-320071 hover:bg-blue-700 text-white font-bold px-4 py-3 rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
