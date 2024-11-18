import React from "react";
import ShelterCard from "./shelterCard";
import pejaten from "@/assets/pejaten.jpg";
import dogsneedlove from "@/assets/dogsneedlove.png";

const shelterData = [
  {
    id: 1,
    imageSrc: pejaten,
    name: "Pejaten Shelter",
    type: "CAT & DOG",
    location:
      "Jl. Pejaten Barat Raya No.45w, RT.1/RW.10, Pejaten Bar., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12540",
    instagramUrl: "https://www.instagram.com/pejatenshelter/",
  },
  {
    id: 2,
    imageSrc: dogsneedlove,
    name: "Sayangi Hewan Peliharaan",
    type: "DOG",
    location: "Daerah Khusus Ibukota Jakarta",
    instagramUrl: "https://www.instagram.com/dogs.needlove/",
  },
];

const ShelterCards = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-extrabold text-center mb-4">
        Discover Our Pet Shelter
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Find your purrrfect companion at our pet shelter partners. Explore
        adoption opportunities for cats, dogs, and more!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {shelterData.map((shelter) => (
          <ShelterCard key={shelter.id} {...shelter} />
        ))}
      </div>
    </div>
  );
};

export default ShelterCards;
