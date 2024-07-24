import Link from "next/link";
import PrimaryButton from "@/components/primaryButton";
import React from "react";

export const Header = () => {
  return (
    <div className="font-plus-jakarta w-full relative flex flex-col items-start justify-start text-left text-gray-500">
      <div className="self-stretch bg-white flex flex-col items-center justify-center text-sm">
        <div className="self-stretch h-16 flex flex-row items-center justify-between p-2.5 box-border">
          <img
            className="w-36 relative h-10 object-cover"
            alt=""
            src="https://i.ibb.co.com/wyKQbSt/banner-10.png"
          />
          <div className="self-stretch flex flex-row items-center justify-start gap-8">
            <div className="flex flex-row items-center justify-start">
              <div className="relative">How It Works</div>
            </div>
            {/* <div className="flex flex-row items-center justify-start">
              <div className="relative">Help Us</div>
            </div> */}
            <div className="flex flex-row items-center justify-start">
              <div className="relative">About Us</div>
            </div>
            {/* <div className="flex flex-row items-center justify-start">
              <div className="relative">FAQ</div>
            </div> */}
            <PrimaryButton>Be Our Hero Today!</PrimaryButton>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Header;
