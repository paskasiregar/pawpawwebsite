import { Contact } from "@/components/contact";
import { Divider } from "@/components/divider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import CTA from "@/components/CTA";
import Hero from "@/components/hero";
import PrimaryButton from "@/components/primaryButton";
import SecButton from "@/components/secButton";
import Image from "next/image";
import bannerImage from "../assets/banner.png";
import logoHeaderImage from "../assets/banner-10.png";
import Link from "next/link";
import Head from "next/head";
import piupiu from "../assets/piupiu.png";
import paska from "../assets/paska.png";
import iqbal from "../assets/iqbal.png";
import kun from "../assets/kun.png";

export default async function Home() {
  return (
    <div className="w-full font-plus-jakarta m-auto flex min-h-screen flex-col items-center justify-between">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4770655134097556"
          crossorigin="anonymous"
        ></script>
      </Head>
      <section className="w-full">
        <div className="centeredcontainer main-container">
          <Header />
        </div>
        <main className="main-container">
          <Hero />
          <Divider />
          <div className="self-stretch bg-white flex flex-col md:flex-row">
            <div className="flex-1 relative h-48 md:h-[489px] z-[0] flex items-center justify-center">
              <Image
                className="w-[80%] h-auto object-cover"
                alt="banner"
                src={bannerImage}
                width={200}
                height={200}
              />
            </div>

            {/* How it works */}
            <div
              id="how-it-works"
              className="flex-1 flex flex-col items-center md:items-start justify-center gap-4 z-[1] p-4 md:p-8"
            >
              <div className="space-y-4">
                <div className="flex justify-center md:justify-start">
                  <svg
                    width="130"
                    height="77"
                    viewBox="0 0 130 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.04016 48.038C39.1938 19.0059 75.4362 75.5193 75.4362 75.5193C58.6481 44.4597 70.5515 14.7701 105.05 54.8444C105.05 54.8444 88.8644 34.0647 127.885 2.52962"
                      stroke="url(#paint0_linear_545_35744)"
                      strokeWidth="4.42591"
                      strokeMiterlimit="10"
                      strokeLinejoin="bevel"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_545_35744"
                        x1="19.971"
                        y1="73.8863"
                        x2="126.116"
                        y2="-0.218346"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.2868" stopColor="#E9404C" />
                        <stop offset="0.2967" stopColor="#EA475C" />
                        <stop offset="0.3252" stopColor="#EB5B85" />
                        <stop offset="0.3554" stopColor="#EB6CA8" />
                        <stop offset="0.3871" stopColor="#EC79C5" />
                        <stop offset="0.4209" stopColor="#EC84DB" />
                        <stop offset="0.4577" stopColor="#ED8BEB" />
                        <stop offset="0.4998" stopColor="#ED90F4" />
                        <stop offset="0.5589" stopColor="#ED91F7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <Image
                    className="w-36 h-10 object-cover"
                    alt="Logo"
                    src={logoHeaderImage}
                    width={120}
                    height={20}
                  />
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative font-extrabold text-2xl md:text-4xl text-center md:text-left">
                    How PawPaw Portal Works
                  </div>
                </div>
                <div className="self-stretch flex flex-col md:flex-row items-center md:items-start justify-start text-lg md:text-xl text-gray-500">
                  <div className="flex-1 flex flex-col items-center md:items-start justify-start">
                    <div className="self-stretch">
                      <p className="m-0 text-center md:text-left">
                        Every video you watch on our app can help animals in
                        need. Fun, isn&apos;t it?
                      </p>
                      <p className="m-2"></p>
                      <p className="m-0 text-center md:text-left">
                        Join us at PawPaw Portal, where animal lovers and
                        shelters meet. Let&apos;s make a difference together!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <PrimaryButton href="https://game.pawpawportal.com">
                    Play Now
                  </PrimaryButton>
                  <Link
                    href="#about-us"
                    className="flex flex-col md:flex-row gap-2"
                  >
                    <SecButton>About Us</SecButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Team */}
          <Divider />
          <div
            id="team"
            className="flex-1 flex flex-col items-center md:items-center justify-center gap-4 z-[1] p-4 md:p-8"
          >
            <div className="space-y-4 justify-center">
              <div className="flex justify-center md:justify-center"></div>

              <div className="flex flex-col items-center md:items-center mb-8">
                <div className="relative font-extrabold text-2xl md:text-4xl text-center md:text-center mb-8">
                  Who are behind PawPaw Portal?
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center">
                {/* Paska */}
                <div className="flex flex-col items-center">
                  <Image
                    className="rounded-full object-cover"
                    alt="Paska"
                    src={paska}
                    width={150}
                    height={150}
                    sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                  />
                  <div className="text-xl font-semibold mt-4">Paska</div>
                  <div className="text-gray-500">Founder</div>
                  <Link
                    href="https://www.linkedin.com/in/paska-profile"
                    passHref
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      <img
                        src="/path-to-linkedin-icon.png"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                      />
                    </a>
                  </Link>
                </div>

                {/* Kak Yus */}
                <div className="flex flex-col items-center">
                  <Image
                    className="rounded-full object-cover"
                    alt="Yus Marcelina"
                    src={piupiu}
                    width={150}
                    height={150}
                    sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                  />
                  <div className="text-xl font-semibold mt-4">
                    Yus Marcelina
                  </div>
                  <div className="text-gray-500">Product Lead</div>
                  <Link
                    href="https://www.linkedin.com/in/yus-marcelina"
                    passHref
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      <img
                        src="/path-to-linkedin-icon.png"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                      />
                    </a>
                  </Link>
                </div>

                {/* Mas Iqbal */}
                <div className="flex flex-col items-center">
                  <Image
                    className="rounded-full object-cover"
                    alt="Moch Iqbal"
                    src={iqbal}
                    width={150}
                    height={150}
                    sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                  />
                  <div className="text-xl font-semibold mt-4">
                    Mochamad Iqbal
                  </div>
                  <div className="text-gray-500">Tech Lead</div>
                  <Link
                    href="https://www.linkedin.com/in/mochamad-iqbal"
                    passHref
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      <img
                        src="/path-to-linkedin-icon.png"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                      />
                    </a>
                  </Link>
                </div>

                {/* Add other team members similarly */}
                {/* Example for another team member */}
                <div className="flex flex-col items-center">
                  <Image
                    className="rounded-full object-cover"
                    alt="Yeni Yuliati"
                    src={piupiu}
                    width={150}
                    height={150}
                    sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                  />
                  <div className="text-xl font-semibold mt-4">Yeni Yuliati</div>
                  <div className="text-gray-500">Founder's Office</div>
                  <Link
                    href="https://www.linkedin.com/in/yeni-yuliati"
                    passHref
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      <img
                        src="/path-to-linkedin-icon.png"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Divider />
          <Contact />
        </main>
        <div className="w-full">
          <div>
            <CTA />
          </div>
          <div id="about-us">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}