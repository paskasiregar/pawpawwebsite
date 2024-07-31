import React from "react";

const SecButton = ({ children, onClick }) => {
  return (
    <button
      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecButton;
