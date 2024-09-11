import Member from "@/member";
import Divider from "@/components/divider";
import paska from "../assets/paska.png";
import kun from "../assets/kun.png";
import yus from "../assets/yus.png";
import iqbal from "../assets/iqbal.png";
import julie from "../assets/julie.png";
import aziza from "../assets/aziza.png";
import yemima from "../assets/yemima.png";
import ken from "../assets/ken.png";
import piupiu from "../assets/piupiu.png";

const teamMembers = [
  {
    name: "Paska",
    role: "Founder",
    imageUrl: paska,
    linkedinUrl: "https://www.linkedin.com/in/pas-ka",
    websiteUrl: "https://www.hellopaska.com",
  },
  {
    name: "@iamkun",
    role: "Godsent Coding Ninja",
    imageUrl: kun,
    linkedinUrl: null,
    websiteUrl: null,
    githubUrl: "https://github.com/iamkun",
  },
  {
    name: "Yus Marcelina",
    role: "Product Lead",
    imageUrl: yus,
    linkedinUrl: "https://www.linkedin.com/in/yusmarcelina/",
    websiteUrl: "https://yusmarcelina.wixsite.com/yusmarcelina",
  },
  {
    name: "Mochamad Iqbal",
    role: "Tech Lead",
    imageUrl: iqbal,
    linkedinUrl: "https://www.linkedin.com/in/mochadwi/",
    githubUrl: "https://github.com/mochadwi",
  },
  {
    name: "Yeni Yuliati",
    role: "Founder's Office",
    imageUrl: julie,
    linkedinUrl: "https://www.linkedin.com/in/yeniyuliati/",
  },
  {
    name: "Aziza Putri",
    role: "Designer",
    imageUrl: aziza,
    linkedinUrl: "https://www.linkedin.com/in/aziza-wienneta/",
  },
  {
    name: "Yemima Milinda",
    role: "Designer",
    imageUrl: yemima,
    linkedinUrl: "https://www.linkedin.com/in/yemimamillinda/",
  },
  {
    name: "Askenas Salinding",
    role: "Content Creator",
    imageUrl: ken,
    linkedinUrl: "https://www.linkedin.com/in/askenassalinding/",
  },
  {
    name: "PiuPiu",
    role: "Chief Attention Seeker",
    imageUrl: piupiu,
  },
];

const Team = () => {
  return (
    <div
      id="team"
      className="flex-1 flex flex-col items-center md:items-center justify-center gap-4 z-[1] p-4 md:p-8"
    >
      <div className="flex flex-col items-center md:items-center mb-8">
        <div className="relative font-extrabold text-2xl md:text-4xl text-center md:text-center mb-8">
          Who are behind PawPaw Portal?
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-center">
        {teamMembers.map((member, index) => (
          <Member
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
            linkedinUrl={member.linkedinUrl}
            websiteUrl={member.websiteUrl}
            githubUrl={member.githubUrl}
          />
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default Team;
