import React from "react";
import Member from "./members";
import paska from "@/assets/paska.png"; // Ensure these paths are correct
import linkedin from "@/assets/linkedin.webp";
import website from "@/assets/website.png";

const Team = () => {
  return (
    <div
      id="team"
      className="flex-1 flex flex-col items-center md:items-center justify-center gap-4 z-[1] p-4 md:p-8"
    >
      <div className="flex flex-col items-center md:items-center mb-8">
        <div className="relative font-extrabold text-2xl md:text-4xl text-center mb-8">
          Who are behind PawPaw Portal?
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-center">
        <Member
          name="Paska"
          role="Founder"
          imageSrc={paska}
          linkedinUrl="https://www.linkedin.com/in/pas-ka"
          websiteUrl="https://www.hellopaska.com"
        />
        {/* Add more Member components here */}
      </div>
    </div>
  );
};

export default Team;
