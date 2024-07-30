import Link from "next/link";
import PrimaryButton from "@/components/primaryButton";
import React from "react";
import Image from "next/image";
import logoHeaderImage from "../assets/banner-10.png";

export const Header = () => {
  return (
    <div className="font-plus-jakarta w-full flex flex-col items-center justify-center text-left text-gray-500">
      <div className="self-stretch bg-white flex flex-col items-center justify-center text-sm">
        <div className="w-full header-content p-2.5 box-border">
          <Link href="/">
            <Image
              className="w-36 h-10 object-cover"
              alt="Logo"
              src="/assets/inverse.png"
              width={120}
              height={20}
            />
          </Link>
          <div className="hidden md:flex flex-row items-center justify-center gap-8">
            <div className="relative">How It Works</div>
            <div className="relative">About Us</div>
          </div>
          <div className="header-logo-button">
            <PrimaryButton>Be Our Hero Today!</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
