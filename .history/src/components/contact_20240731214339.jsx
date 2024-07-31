import React from "react";
import PrimaryButton from "@/components/primaryButton";
import NameInput from "./nameInput";
import EmailInput from "./emailInput";
import MessageInput from "./mesageInput";
import Image from "next/image";
import logoHeaderImage from "../assets/banner-10.png";

export const Contact = () => {
  return (
    <div className="font-plus-jakarta flex flex-col items-center justify-center py-16 px-4 md:px-[200px] gap-[40px] text-29xl">
      <div className="flex justify-start items-start">
        <svg
          width="1620"
          height="188"
          viewBox="0 0 1620 188"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1891 188C1891 100.375 1784.67 29.342 1653.5 29.342C1522.34 29.342 1413.53 100.375 1413.53 188C1413.53 122.37 1317.84 69.158 1199.78 69.158C1081.72 69.158 986.029 122.362 986.029 188C986.029 85.8274 930.825 3 862.735 3C794.645 3 737.369 85.8274 737.369 188C737.369 108.853 646.33 44.6865 534.029 44.6865C421.728 44.6865 330.689 108.853 330.689 188C330.689 134.381 239.649 90.9105 127.349 90.9105C15.0481 90.9105 -76 134.381 -76 188"
            stroke="url(#paint0_linear_545_35799)"
            strokeWidth="6"
            strokeMiterlimit="10"
            strokeLinejoin="bevel"
          />
          <defs>
            <linearGradient
              id="paint0_linear_545_35799"
              x1="-84.5283"
              y1="91.1699"
              x2="1899.52"
              y2="91.1699"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0224" stopColor="#EBADD7" />
              <stop offset="1" stopColor="#FF2445" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Image
        className="w-36 h-10 object-cover"
        alt="Logo"
        src={logoHeaderImage}
        width={120}
        height={20}
      />
      <div className="text-4xl font-extrabold  w-full">Contact Us</div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe6LShrPVKh-LHDKOas-AzL__AQOai2xqzqOClVCFVoLnht3g/viewform?embedded=true"
        width="640"
        height="689"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
      {/* <form
        action="https://formspree.io/f/xwpeooor"
        method="POST"
        className="w-full"
      >
        <div className="w-full flex flex-col items-start gap-[16px] text-base text-light-l800 font-regular-reg-2">
          <div className="w-full flex flex-col md:flex-row gap-[20px]">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="name"
                className="w-full block text-sm font-medium text-gray-700"
              ></label>
              <NameInput className="w-full" id="name" name="name" type="text" />
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <EmailInput
                className="w-full"
                id="email"
                name="email"
                type="email"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <MessageInput className="w-full" id="message" name="message" />
          </div>
        </div>
        <div className="mt-4">
          <PrimaryButton type="submit">Send Now</PrimaryButton>
        </div>
      </form> */}
    </div>
  );
};

export default Contact;
