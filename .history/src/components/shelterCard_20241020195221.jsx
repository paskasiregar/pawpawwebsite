// components/ShelterCard.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import locationIcon from "@/assets/loc.png";
import instagramIcon from "@/assets/loc.png";

const ShelterCard = ({
  imageSrc,
  name,
  type,
  price,
  location,
  instagramUrl,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        className="object-cover w-full h-40"
        src={imageSrc}
        alt={`${name} image`}
        width={400}
        height={250}
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-purple-500 uppercase bg-purple-100 px-2 py-1 rounded-full">
            {type}
          </span>
          <span className="text-xs font-bold text-gray-500">{price}</span>
        </div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <Image src={locationIcon} alt="Location" width={15} height={15} />
          <span className="ml-2">{location}</span>
        </div>
        <div className="mt-4">
          <Link href={instagramUrl} passHref>
            className="flex items-center justify-center border border-purple-500
            rounded-md py-2 px-4 hover:bg-purple-100 transition duration-200"
            target="_blank" rel="noopener noreferrer"
            <Image src={instagramIcon} alt="Instagram" width={20} height={20} />
            <span className="ml-2 text-purple-600">Visit Instagram</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShelterCard;
