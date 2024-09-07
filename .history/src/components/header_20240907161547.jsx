import Link from "next/link";
import PrimaryButton from "@/components/primaryButton";
import React from "react";
import Image from "next/image";
import logoHeaderImage from "../assets/banner-10.png";

export const Header = () => {
  return (
    <div className="w-full bg-white fixed top-0 shadow-sm items-center">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              className="w-36 h-10 object-cover"
              alt="Logo"
              src={logoHeaderImage}
              width={120}
              height={20}
            />
          </Link>
        </div>

        <div className="hidden md:flex flex-row space-x-8 items-center">
          <Link href="#how-it-works" className="text-gray-500">
            How It Works
          </Link>
          <Link href="#team" className="text-gray-500">
            About Us
          </Link>
          <Link href="/privacy" className="text-gray-500">
            Privacy Policy
          </Link>
        </div>

        <div>
          <Link href="https://game.pawpawportal.com">
            <PrimaryButton href="https://game.pawpawportal.com">
              Be Our Hero Today!
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
