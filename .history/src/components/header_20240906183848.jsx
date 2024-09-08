import Link from "next/link";
import PrimaryButton from "@/components/primaryButton";
import React from "react";
import Image from "next/image";
import logoHeaderImage from "../assets/banner-10.png";

export const Header = () => {
  return (
    <div className="font-plus-jakarta w-full fixed top-0 z-50 bg-white shadow-md text-left text-gray-500">
      <div className="self-stretch bg-white flex flex-col items-center justify-center text-sm">
        <div className="w-full header-content p-2.5 box-border">
          <Link href="/">
            <Image
              className="w-36 h-10 object-cover"
              alt="Logo"
              src={logoHeaderImage}
              width={120}
              height={20}
            />
          </Link>
          <div className="hidden md:flex flex-row items-center justify-center gap-8">
            <div>
              <Link href="#how-it-works">How It Works</Link>
            </div>
            <div>
              <Link href="#team">About Us</Link>
            </div>
            <div>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
          <div className="header-logo-button">
            <Link href="https://game.pawpawportal.com">
              <PrimaryButton
                className="w-full"
                href="https://game.pawpawportal.com"
              >
                Be Our Hero Today!
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;