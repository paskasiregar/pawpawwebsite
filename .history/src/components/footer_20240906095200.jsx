import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoFooterImage from "../assets/inverse.png";

export const Footer = () => {
  return (
    <div className="font-plus-jakarta w-full flex bg-black">
      <div className="font-plus-jakarta w-full flex flex-col items-center bg-black py-8 px-4">
        <div className="max-w-6xl w-full mx-auto space-y-6">
          {/* Footer Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-6">
            <div className="space-y-4">
              <Image
                className="w-20 h-10 object-cover"
                alt="Logo"
                src={logoFooterImage}
                width={80}
                height={80}
              />
              <div className="space-y-4">
                <div className="text-white text-3xl font-extrabold">
                  PawPaw Portal
                </div>
                <p className="text-med text-gray-400">
                  PawPaw Portal Indonesia is a national animal welfare charity
                  with a vision for a future where every pet is safe, respected,
                  and loved.
                </p>
              </div>
            </div>

            {/* Vision and Mission */}
            <div className="flex flex-col md:flex-row mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-8">
              <div className="space-y-2">
                <div className="font-semibold text-xl text-white">
                  Our Vision
                </div>
                <div className="text-xs text-gray-500">
                  Becoming the leading platform in Indonesia for animal welfare
                  transformation, by providing a bridge that connects animal
                  shelters and the community, and ensuring that every animal
                  gets a second chance in life.
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-xl text-white">
                  Our Mission
                </div>
                <div className="text-xs text-gray-500">
                  <ol className="list-inside list-disc">
                    <li>
                      Building a wide network between animal shelters and
                      prospective adopters, facilitating the adoption process
                      and handling of stray animals.
                    </li>
                    <li>
                      Providing ongoing support to shelters through donations
                      and resources, ensuring they have what they need to care
                      for animals properly.
                    </li>
                    <li>
                      Spreading awareness about the importance of animal welfare
                      and adoption, and inspiring communities to take an active
                      role in saving animals.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* social media */}
          <div className="text-xl font-semibold mb-4 text-white">
            Stay in touch
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/pawpawportal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33"
                />
              </svg>
            </Link>
            <Link href="https://twitter.com/pawpawportal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g fill="white">
                  <path d="M1 2h2.5L3.5 2h-2.5z">
                    <animate
                      fill="freeze"
                      attributeName="d"
                      dur="0.4s"
                      values="M1 2h2.5L3.5 2h-2.5z;M1 2h2.5L18.5 22h-2.5z"
                    />
                  </path>
                  <path d="M5.5 2h2.5L7.2 2h-2.5z">
                    <animate
                      fill="freeze"
                      attributeName="d"
                      dur="0.4s"
                      values="M5.5 2h2.5L7.2 2h-2.5z;M5.5 2h2.5L23 22h-2.5z"
                    />
                  </path>
                  <path d="M3 2h5v0h-5z" opacity="0">
                    <set attributeName="opacity" begin="0.4s" to="1" />
                    <animate
                      fill="freeze"
                      attributeName="d"
                      begin="0.4s"
                      dur="0.4s"
                      values="M3 2h5v0h-5z;M3 2h5v2h-5z"
                    />
                  </path>
                  <path d="M16 22h5v0h-5z" opacity="0">
                    <set attributeName="opacity" begin="0.4s" to="1" />
                    <animate
                      fill="freeze"
                      attributeName="d"
                      begin="0.4s"
                      dur="0.4s"
                      values="M16 22h5v0h-5z;M16 22h5v-2h-5z"
                    />
                  </path>
                  <path d="M18.5 2h3.5L22 2h-3.5z" opacity="0">
                    <set attributeName="opacity" begin="0.5s" to="1" />
                    <animate
                      fill="freeze"
                      attributeName="d"
                      begin="0.5s"
                      dur="0.4s"
                      values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"
                    />
                  </path>
                </g>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/company/pawpawportal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
                />
              </svg>
            </Link>
          </div>
          <section>
            <Link href="/privacy" className="text-gray-400 text-sm">
              Privacy Policy
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
