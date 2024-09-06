import React from "react";

const SecButton = ({ children, onClick }) => {
  return (
    <button
      className="bg-white border border-inherit-320071 text-inherit-320071 font-bold py-2 px-4 rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecButton;
