import React from "react";
import ShelterCard from "./ShelterCard";
import pejaten from "@/assets/pejaten.jpg";

const shelterData = [
  {
    id: 1,
    imageSrc: pejaten,
    name: "Pejaten Shelter",
    type: "CAT & DOG",
    location:
      "Jl. Pejaten Barat Raya No.45w, RT.1/RW.10, Pejaten Bar., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12540",
    instagramUrl: "https://www.instagram.com/happypawsshelter/",
  },
  {
    id: 2,
    imageSrc: pejaten,
    name: "Jakarta's Pet Shelter",
    type: "CAT & DOG",
    location: "Jakarta, Indonesia",
    instagramUrl: "https://www.instagram.com/jakartapetshelter/",
  },
];

const ShelterCards = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-extrabold text-center mb-4">
        Discover Our Pet Shelter
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Find Your Perfect Companion at Our Pet Shelter. Explore Adoption
        Opportunities for Cats, Dogs, and More!
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
