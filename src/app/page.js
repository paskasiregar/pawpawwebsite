import { Contact } from "@/components/contact";
import { Divider } from "@/components/divider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import CTA from "@/components/CTA";
import Hero from "@/components/hero";
import PrimaryButton from "@/components/primaryButton";
import SecButton from "@/components/secButton";

export default async function Home() {
  return (
    <div className="w-full font-plus-jakarta m-auto flex min-h-screen flex-col items-center justify-between py-8">
      <section className="space-y-4 w-full">
        <div className="centeredcontainer main-container">
          <Header />
        </div>
        <main className="main-container">
          <Hero />
          <Divider />
          <div className="self-stretch bg-white flex">
            <div className="flex-1 relative h-[489px] z-[0]">
              <img
                className="absolute w-auto h-auto"
                alt=""
                src="https://i.ibb.co.com/5KdzhbM/banner.png"
              />
            </div>

            <div className="flex-1 flex flex-col items-start justify-center gap-4 z-[1]">
              <div className="space-y-4">
                <div>
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
                      stroke-width="4.42591"
                      stroke-miterlimit="10"
                      stroke-linejoin="bevel"
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
                        <stop offset="0.2868" stop-color="#E9404C" />
                        <stop offset="0.2967" stop-color="#EA475C" />
                        <stop offset="0.3252" stop-color="#EB5B85" />
                        <stop offset="0.3554" stop-color="#EB6CA8" />
                        <stop offset="0.3871" stop-color="#EC79C5" />
                        <stop offset="0.4209" stop-color="#EC84DB" />
                        <stop offset="0.4577" stop-color="#ED8BEB" />
                        <stop offset="0.4998" stop-color="#ED90F4" />
                        <stop offset="0.5589" stop-color="#ED91F7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <img
                  className="w-36 relative h-10 object-cover"
                  alt=""
                  src="https://i.ibb.co.com/wyKQbSt/banner-10.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative font-extrabold text-4xl">
                    How PawPaw Portal Works
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start text-xl text-gray-500">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch">
                      <p className="m-0">
                        Every video you watch on our app can help animals in
                        need. Fun, isn't it?
                      </p>
                      <p className="m-2"></p>
                      <p className="m-0">
                        Join us at PawPaw Portal, where animal lovers and
                        shelters meet. Let's make a difference together!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <PrimaryButton>Play Now</PrimaryButton>
                  <SecButton>About Us</SecButton>
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
          <Footer />
        </div>
      </section>
    </div>
  );
}
