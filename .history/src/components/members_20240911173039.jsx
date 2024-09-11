import React from "react";
import Image from "next/image";
import Link from "next/link";
import linkedin from "../assets/linkedin.webp";
import github from "../assets/github.png";
import website from "../assets/website.png";

const Member = ({
  name,
  role,
  imageSrc,
  linkedinUrl,
  githubUrl,
  websiteUrl,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-full object-cover"
        alt={name}
        src={imageSrc}
        width={150}
        height={150}
        sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
      />
      <div className="text-xl font-semibold mt-4">{name}</div>
      <div className="text-gray-500">{role}</div>
      <div className="flex gap-2">
        {linkedinUrl && (
          <Link href={linkedinUrl} passHref>
            <Image src={linkedin} alt="LinkedIn" width={20} height={20} />
          </Link>
        )}
        {githubUrl && (
          <Link href={githubUrl} passHref>
            <Image src={github} alt="GitHub" width={20} height={20} />
          </Link>
        )}
        {websiteUrl && (
          <Link href={websiteUrl} passHref>
            <Image src={website} alt="Website" width={20} height={20} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Member;
