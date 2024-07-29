import Link from "next/link";
import PrimaryButton from "@/components/primaryButton";
import React from "react";

export const Hero = () => {
  return (
    <div className="hero-bg font-plus-jakarta w-full flex flex-col md:flex-row items-center justify-center p-8 md:p-20 relative">
      <div className="relative z-10 w-full md:w-1/2 text-center md:text-left">
        <svg
          width="207"
          height="25"
          viewBox="0 0 207 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 23C2 3.95956 51.1641 -8.73412 51.1641 23C82.0898 -11.1143 205 1.85554 205 23"
            stroke="url(#paint0_linear_545_35742)"
            stroke-width="3.9685"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <defs>
            <linearGradient
              id="paint0_linear_545_35742"
              x1="-0.527416"
              y1="7.59934"
              x2="126.655"
              y2="7.59934"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.1927" stop-color="#E8404C" />
              <stop offset="0.4574" stop-color="#EAACD6" />
              <stop offset="0.7493" stop-color="#74C39E" />
              <stop offset="0.8875" stop-color="#F4AA0E" />
            </linearGradient>
          </defs>
        </svg>

        <div className="w-full flex flex-col items-center md:items-start justify-start space-y-6 md:space-y-12">
          <div className="w-[100%] flex flex-col items-center md:items-start justify-start gap-y-4">
            <div className="text-6xl md:text-8xl font-extrabold">
              More than just pets
            </div>
            <b className="text-xl md:text-2xl">
              Change lives by playing a game!
            </b>
            <div className="text-sm md:text-md text-gray-500">
              <p>
                Help stray cats and dogs find homes without spending a dime.
              </p>
              <p>Play our game and let your plays turn into donations!</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <PrimaryButton>Play Now</PrimaryButton>
          </div>
        </div>
      </div>

    
        </div>
      // </div>
      <svg
        className="hidden md:block"
        width="48"
        height="46"
        viewBox="0 0 48 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 46C2 27.296 29.551 30.0086 36.5736 34.5625C36.5736 34.5625 14.4611 2 47.5714 2"
          stroke="url(#paint0_linear_545_35743)"
          stroke-width="3.92857"
          stroke-miterlimit="10"
          stroke-linejoin="bevel"
        />
        <defs>
          <linearGradient
            id="paint0_linear_545_35743"
            x1="37.3571"
            y1="2"
            x2="7.5"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF2445" />
            <stop offset="1" stop-color="#F5AB0E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Hero;
