import Image from "next/image";
import Link from "next/link";

const Member = ({
  name,
  role,
  imageUrl,
  linkedinUrl,
  websiteUrl,
  githubUrl,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-full object-cover"
        alt={name}
        src={imageUrl}
        width={150}
        height={150}
        sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
      />
      <div className="text-xl font-semibold mt-4">{name}</div>
      <div className="text-gray-500">{role}</div>
      <div className="flex gap-2">
        {linkedinUrl && (
          <Link href={linkedinUrl} passHref>
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={20}
              height={20}
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
            />
          </Link>
        )}
        {websiteUrl && (
          <Link href={websiteUrl} passHref>
            <Image
              src="/website.png"
              alt="Website"
              width={20}
              height={20}
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
            />
          </Link>
        )}
        {githubUrl && (
          <Link href={githubUrl} passHref>
            <Image
              src="/github.png"
              alt="GitHub"
              width={20}
              height={20}
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Member;
