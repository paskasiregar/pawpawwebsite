import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="cta-container font-plus-jakarta p-4 md:p-8 flex flex-col md:flex-row items-center justify-center">
      <svg
        className="cta-decoration mb-4 md:mb-0 md:mr-4"
        width="48"
        height="46"
        viewBox="0 0 48 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 46C2 27.296 29.551 30.0086 36.5736 34.5625C36.5736 34.5625 14.4611 2 47.5714 2"
          stroke="url(#cta_gradient)"
          strokeWidth="3.92857"
          strokeMiterlimit="10"
          strokeLinejoin="bevel"
        />
        <defs>
          <linearGradient
            id="cta_gradient"
            x1="37.3571"
            y1="2"
            x2="7.5"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF2445" />
            <stop offset="1" stopColor="#F5AB0E" />
          </linearGradient>
        </defs>
      </svg>
      <Link href="/game">
        <div className="cta-button text-center bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg cursor-pointer">
          Play Our Game Now
        </div>
      </Link>
    </div>
  );
};

export default CTA;
