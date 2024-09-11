"use client"; // Only add this if you have client-side logic like useState, event handlers, etc.

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Member = ({ name, role, imageSrc, linkedinUrl, websiteUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-full object-cover"
        alt={name}
        src={imageSrc}
        width={150}
        height={150}
      />
      <div className="text-xl font-semibold mt-4">{name}</div>
      <div className="text-gray-500">{role}</div>
      <div className="flex gap-2">
        {linkedinUrl && (
          <Link href={linkedinUrl} passHref>
            <Image src="/linkedin.webp" alt="LinkedIn" width={20} height={20} />
          </Link>
        )}
        {websiteUrl && (
          <Link href={websiteUrl} passHref>
            <Image src="/website.png" alt="Website" width={20} height={20} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Member;
