// components/ShelterCards.jsx
import React from "react";
import ShelterCard from "./ShelterCard";
import happyPawsImage from "../assets/happy-paws-shelter.png";
import jakartaPetsImage from "../assets/jakarta-pet-shelter.png";

const shelterData = [
  {
    id: 1,
    imageSrc: happyPawsImage,
    name: "Happy Paws Shelter",
    type: "CAT & DOG",
    price: "Rp 20,000 - Rp 25,000",
    location: "Jakarta, Indonesia",
    instagramUrl: "https://www.instagram.com/happypawsshelter/",
  },
  {
    id: 2,
    imageSrc: jakartaPetsImage,
    name: "Jakarta's Pet Shelter",
    type: "CAT & DOG",
    price: "Rp 20,000 - Rp 25,000",
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
