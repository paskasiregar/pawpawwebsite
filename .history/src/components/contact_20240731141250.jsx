import React from "react";
import PrimaryButton from "@/components/primaryButton";
import NameInput from "@/components/NameInput";
import EmailInput from "@/components/EmailInput";
import MessageInput from "@/components/MessageInput";

export const Contact = () => {
  return (
    <div className="font-plus-jakarta flex flex-col items-center justify-center py-8 px-4 md:py-16 md:px-[200px] relative gap-4 md:gap-[40px]">
      <div className="flex justify-start items-start mb-4 md:mb-0">
        {/* SVG or any other elements */}
      </div>
      <img
        className="w-36 relative h-10 object-cover mb-4 md:mb-0"
        alt="Logo"
        src="https://i.ibb.co.com/wyKQbSt/banner-10.png"
      />
      <div className="text-4xl font-extrabold mb-6 md:mb-0">Contact Us</div>
      <div className="w-full max-w-lg flex flex-col items-start justify-start gap-[16px] z-[3] text-base text-light-l800 font-regular-reg-2">
        <div className="w-full flex flex-col md:flex-row items-start justify-start gap-[20px]">
          <NameInput />
          <EmailInput />
        </div>
        <MessageInput />
      </div>
      <PrimaryButton>Send Now</PrimaryButton>
    </div>
  );
};

export default Contact;
