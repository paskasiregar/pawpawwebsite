const Member = ({
  name,
  role,
  imageSrc,
  linkedinUrl,
  githubUrl,
  websiteUrl,
}) => {
  console.log("GitHub URL: ", githubUrl); // This will print the URL in the browser's console.

  return (
    <div className="flex flex-col items-center">
      {linkedinUrl && (
        <Link href={linkedinUrl} passHref>
          <Image src={linkedin} alt="LinkedIn" width={20} height={20} />
        </Link>
      )}
      {githubUrl && githubUrl.startsWith("https") && (
        <Link href={githubUrl} passHref>
          <Image src={github} alt="Github" width={20} height={20} />
        </Link>
      )}
      {websiteUrl && (
        <Link href={websiteUrl} passHref>
          <Image src={website} alt="Website" width={20} height={20} />
        </Link>
      )}
    </div>
  );
};
