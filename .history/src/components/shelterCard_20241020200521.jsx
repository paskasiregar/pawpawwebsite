import React from "react";
import Image from "next/image";
import Link from "next/link";
import locationIcon from "@/assets/loc.png";
import instagramIcon from "@/assets/ig.webp";

const ShelterCard = ({
  imageSrc,
  name,
  type,
  price,
  location,
  instagramUrl,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <div className="relative w-full h-40 md:h-60 lg:h-80">
        <Image
          className="object-cover w-full h-full"
          src={imageSrc}
          alt={`${name} image`}
          layout="fill" // Makes the image cover the entire div
          objectFit="cover" // Ensures the image covers the div while maintaining aspect ratio
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-indigo-500 uppercase bg-indigo-200 px-2 py-1 rounded-full">
              {type}
            </span>
          </div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center text-gray-500 text-sm mt-2">
            <Image src={locationIcon} alt="Location" width={15} height={15} />
            <span className="ml-2">{location}</span>
          </div>
        </div>
        <div className="mt-4">
          <Link href={instagramUrl} passHref>
            <a
              className="flex items-center justify-center border border-indigo-500 rounded-md py-2 px-4 hover:bg-indigo-100 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagramIcon}
                alt="Instagram"
                width={20}
                height={20}
              />
              <span className="ml-2 text-indigo-700">Visit Instagram</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShelterCard;
