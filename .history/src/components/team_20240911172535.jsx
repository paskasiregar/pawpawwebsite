import React from "react";
import Member from "@/components/member";
import paska from "@/assets/paska.png"; // Replace with actual image paths
import kun from "@/assets/kun.png";
import yus from "@/assets/yus.png";
import iqbal from "@/assets/iqbal.png";
import julie from "@/assets/julie.png";
import aziza from "@/assets/aziza.png";
import yemima from "@/assets/yemima.png";
import ken from "@/assets/ken.png";
import piupiu from "@/assets/piupiu.png";

const teamMembers = [
  {
    name: "Paska",
    role: "Founder",
    imageSrc: paska,
    linkedinUrl: "https://www.linkedin.com/in/pas-ka",
    websiteUrl: "https://www.hellopaska.com",
  },
  {
    name: "@iamkun",
    role: "Godsent Coding Ninja",
    imageSrc: kun,
    linkedinUrl: "https://github.com/iamkun",
  },
  {
    name: "Yus Marcelina",
    role: "Product Lead",
    imageSrc: yus,
    linkedinUrl: "https://www.linkedin.com/in/yusmarcelina/",
    websiteUrl: "https://yusmarcelina.wixsite.com/yusmarcelina",
  },
  {
    name: "Mochamad Iqbal",
    role: "Tech Lead",
    imageSrc: iqbal,
    linkedinUrl: "https://www.linkedin.com/in/mochadwi/",
    githubUrl: "https://github.com/mochadwi",
  },
  {
    name: "Yeni Yuliati",
    role: "Founder’s Office",
    imageSrc: julie,
    linkedinUrl: "https://www.linkedin.com/in/yeniyuliati/",
  },
  {
    name: "Aziza Putri",
    role: "Designer",
    imageSrc: aziza,
    linkedinUrl: "https://www.linkedin.com/in/aziza-wienneta/",
  },
  {
    name: "Yemima Milinda",
    role: "Designer",
    imageSrc: yemima,
    linkedinUrl: "https://www.linkedin.com/in/yemimamillinda/",
  },
  {
    name: "Askenas Salinding",
    role: "Content Creator",
    imageSrc: ken,
    linkedinUrl: "https://www.linkedin.com/in/askenassalinding/",
  },
  {
    name: "PiuPiu",
    role: "Chief Attention Seeker",
    imageSrc: piupiu,
  },
];

const Team = () => {
  return (
    <div
      id="team"
      className="flex-1 flex flex-col items-center md:items-center justify-center gap-4 z-[1] p-4 md:p-8"
    >
      <div className="flex flex-col items-center md:items-center mb-8">
        <div className="relative font-extrabold text-
