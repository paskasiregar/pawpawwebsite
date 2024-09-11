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
import linkedin from "../assets/linkedin.webp";
import github from "../assets/github.png";
import website from "../assets/website.png";
import piupiu from "../assets/piupiu.png";
import paska from "../assets/paska.png";
import iqbal from "../assets/iqbal.png";
import kun from "../assets/kun.png";
import julie from "../assets/julie.png";
import yus from "../assets/yus.png";
import yemima from "../assets/yemima.png";
import aziza from "../assets/aziza.png";
import Script from "next/script";
import ken from "../assets/ken.png";

export default async function Home() {
  return (
    <div className="mt-40 mb-0 w-full font-plus-jakarta m-auto flex min-h-screen flex-col items-center justify-between">
      <Head></Head>
      {/* CPM Revenue script */}
      {/* <Script
        type="text/javascript"
        src="//pl24310112.cpmrevenuegate.com/cc/a3/1e/cca31e5e9811b252527560f4431eff54.js"
      ></Script>
      <Script
        type="text/javascript"
        src="//inmateimpossibility.com/cc/a3/1e/cca31e5e9811b252527560f4431eff54.js"
      ></Script> */}

      {/* Google Tag Manager script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JXSG3Z992D"
      ></Script>

      {/* Inline GTM script */}
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JXSG3Z992D');
          `,
        }}
      />

      {/* Google Adsense*/}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4770655134097556"
        crossorigin="anonymous"
      ></Script>

      {/* Consent
      <Script
        id="usercentrics-cmp"
        src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
        data-settings-id="3G7ZX3kQGi-Q4R"
        async
      ></Script>
      <Script
        id="usercentrics-cmp"
        src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
        data-settings-id="3G7ZX3kQGi-Q4R"
        async
      ></Script> */}

      <section className="w-full">
        <div className="centeredcontainer main-container">
          <Header />
        </div>
        <main className="main-container">
          <div className="animate-fade-in-up">
            <Hero />
          </div>
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
                        Every ads you see on our app can help animals in need.
                        Fun, isn&apos;t it?
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
                  <Link href="https://game.pawpawportal.com">
                    <PrimaryButton
                      className="w-full"
                      href="https://game.pawpawportal.com"
                    >
                      Play Now
                    </PrimaryButton>
                  </Link>
                  <Link
                    href="#team"
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
            <div className="flex flex-col items-center md:items-center mb-8">
              <div className="relative font-extrabold text-2xl md:text-4xl text-center md:text-center mb-8">
                Who are behind PawPaw Portal?
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-center">
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
                <div className="flex gap-2">
                  <Link href="https://www.linkedin.com/in/pas-ka" passHref>
                    <Image
                      src={linkedin}
                      alt="LinkedIn"
                      width={20}
                      height={20}
                      sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
                    />
                  </Link>
                  <Link href="https://www.hellopaska.com" passHref>
                    <Image
                      src={website}
                      alt="Website"
                      width={20}
                      height={20}
                      sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
                    />
                  </Link>
                </div>
              </div>

              {/* iamkun */}
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full object-cover"
                  alt="@iamkun"
                  src={kun}
                  width={150}
                  height={150}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
                <div className="text-xl font-semibold mt-4">@iamkun</div>
                <div className="text-gray-500">Godsent Coding Ninja</div>
                <Link href="https://github.com/iamkun" passHref>
                  <Image
                    src={github}
                    alt="GitHub"
                    width={20}
                    height={20}
                    sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
                  />
                </Link>
              </div>

              {/* Kak Yus */}
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full object-cover"
                  alt="Yus Marcelina"
                  src={yus}
                  width={150}
                  height={150}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
                <div className="text-xl font-semibold mt-4">Yus Marcelina</div>
                <div className="text-gray-500">Product Lead</div>
                <div className="flex gap-2">
                  <Link
                    href="https://www.linkedin.com/in/yusmarcelina/"
                    passHref
                  >
                    <Image
                      src={linkedin}
                      alt="LinkedIn"
                      width={20}
                      height={20}
                      sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
                    />
                  </Link>
                  <Link
                    href="https://yusmarcelina.wixsite.com/yusmarcelina"
                    passHref
                  >
                    <Image
                      src={website}
                      alt="Website"
                      width={20}
                      height={20}
                      sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
                    />
                  </Link>
                </div>
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
                <div className="text-xl font-semibold mt-4">Mochamad Iqbal</div>
                <div className="text-gray-500">Tech Lead</div>
                <div className="flex gap-2">
                  <Link href="https://www.linkedin.com/in/mochadwi/" passHref>
                    <Image
                      src={linkedin}
                      alt="LinkedIn"
                      width={20}
                      height={20}
                      sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
                    />
                  </Link>
                  <Link href="https://github.com/mochadwi" passHref>
                    <Image
                      src={github}
                      alt="GitHub"
                      width={20}
                      height={20}
                      sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
                    />
                  </Link>
                </div>
              </div>

              {/* Julie */}
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full object-cover"
                  alt="Yeni Yuliati"
                  src={julie}
                  width={150}
                  height={150}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
                <div className="text-xl font-semibold mt-4">Yeni Yuliati</div>
                <div className="text-gray-500">Founder&apos;s Office</div>
                <Link href="https://www.linkedin.com/in/yeniyuliati/" passHref>
                  <Image
                    src={linkedin}
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
                  />
                </Link>
              </div>

              {/* Aziza */}
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full object-cover"
                  alt="Aziza Putri"
                  src={aziza}
                  width={150}
                  height={150}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
                <div className="text-xl font-semibold mt-4">Aziza Putri</div>
                <div className="text-gray-500">Designer</div>
                <Link
                  href="https://www.linkedin.com/in/aziza-wienneta/"
                  passHref
                >
                  <Image
                    src={linkedin}
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
                  />
                </Link>
              </div>

              {/* Yemima */}
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full object-cover"
                  alt="Yemima Milinda"
                  src={yemima}
                  width={150}
                  height={150}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
                <div className="text-xl font-semibold mt-4">Yemima Milinda</div>
                <div className="text-gray-500">Designer</div>
                <Link
                  href="https://www.linkedin.com/in/yemimamillinda/"
                  passHref
                >
                  <Image
                    src={linkedin}
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
                  />
                </Link>
              </div>

              {/* Askenas */}
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full object-cover"
                  alt="Yemima Milinda"
                  src={ken}
                  width={150}
                  height={150}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
                <div className="text-xl font-semibold mt-4">
                  Askenas Salinding
                </div>
                <div className="text-gray-500">Content Creator</div>
                <Link
                  href="https://www.linkedin.com/in/askenassalinding/"
                  passHref
                >
                  <Image
                    src={linkedin}
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    sizes="(max-width: 768px) 24px, (max-width: 1200px) 24px"
                  />
                </Link>
              </div>

              {/* PiuPiu */}
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full object-cover"
                  alt="PiuPiu"
                  src={piupiu}
                  width={150}
                  height={150}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
                <div className="text-xl font-semibold mt-4">PiuPiu</div>
                <div className="text-gray-500">Chief Attention Seeker</div>
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
