import Link from "next/link";
import PrimaryButton from "@/components/primaryButton";
import React from "react";

export const Hero = () => {
  return (
    <div className="hero-bg font-plus-jakarta w-full flex flex-col md:flex-row items-center justify-center p-8 md:p-20 relative">
      <div className="relative z-10 w-full md:w-1/2 text-center md:text-left">
        <svg
          width="207"
          height="25"
          viewBox="0 0 207 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 23C2 3.95956 51.1641 -8.73412 51.1641 23C82.0898 -11.1143 205 1.85554 205 23"
            stroke="url(#paint0_linear_545_35742)"
            stroke-width="3.9685"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <defs>
            <linearGradient
              id="paint0_linear_545_35742"
              x1="-0.527416"
              y1="7.59934"
              x2="126.655"
              y2="7.59934"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.1927" stop-color="#E8404C" />
              <stop offset="0.4574" stop-color="#EAACD6" />
              <stop offset="0.7493" stop-color="#74C39E" />
              <stop offset="0.8875" stop-color="#F4AA0E" />
            </linearGradient>
          </defs>
        </svg>

        <div className="w-[80%] flex flex-col items-center md:items-start justify-start space-y-6 md:space-y-12">
          <div className="w-[100%] flex flex-col items-center md:items-start justify-start gap-y-4">
            <div className="text-6xl md:text-8xl font-extrabold">
              More than just pets
            </div>
            <b className="text-xl md:text-2xl">
              Change lives by playing a game!
            </b>
            <div className="text-sm md:text-md text-gray-500">
              <p>
                Help stray cats and dogs find homes without spending a dime.
              </p>
              <p>Play our game and let your plays turn into donations!</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <PrimaryButton>Play Now</PrimaryButton>
          </div>
        </div>
      </div>

      {/* Happy Homes */}
      <div className="mt-10 flex flex-col items-center md:items-start justify-center z-[2] text-xl w-full px-4 md:px-0">
        <div className="w-full flex flex-col items-start justify-start gap-4 md:gap-6">
          <div className="w-full flex flex-col items-start justify-start">
            <div className="w-full rounded-xl bg-white flex flex-row items-center justify-start p-5 gap-4 md:gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#320071"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </g>
              </svg>
              <div className="flex-1 flex flex-col items-start justify-start gap-2">
                <b className="self-stretch relative">Happy Homes</b>
                <div className="self-stretch relative text-sm md:text-base leading-snug text-dark-d200">
                  Every game you play helps provide safe shelters for stray cats
                  and dogs.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start">
            <div className="w-full rounded-xl bg-white flex flex-row items-center justify-start p-5 gap-4 md:gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#320071"
                  d="M9.5 22q-1.475 0-2.488-1.012T6 18.5q0-.225.063-.35t-.013-.2t-.2-.012T5.5 18q-1.475 0-2.488-1.012T2 14.5t1.013-2.488T5.5 11q.575 0 1.05.15t.9.45l4.15-4.15q-.3-.425-.45-.9T11 5.5q0-1.475 1.013-2.488T14.5 2t2.488 1.013T18 5.5q0 .225-.062.35t.012.2t.2.013T18.5 6q1.475 0 2.488 1.013T22 9.5t-1.012 2.488T18.5 13q-.575 0-1.05-.15t-.9-.45l-4.15 4.15q.3.425.45.9T13 18.5q0 1.475-1.012 2.488T9.5 22m0-2q.65 0 1.075-.425T11 18.5q0-.225-.062-.437t-.188-.413q-.425-.6-.35-1.287t.6-1.213L15.15 11q.525-.525 1.213-.6t1.287.35q.2.125.413.188T18.5 11q.65 0 1.075-.425T20 9.5t-.425-1.075T18.5 8q-.875 0-1.225-.088t-.725-.462t-.462-.725T16 5.5q0-.65-.425-1.075T14.5 4t-1.075.425T13 5.5q0 .275.05.463t.2.387q.425.6.35 1.288T13 8.85L8.85 13q-.525.525-1.213.6t-1.287-.35q-.2-.125-.412-.187T5.5 13q-.65 0-1.075.425T4 14.5t.425 1.075T5.5 16q.875 0 1.225.088t.725.462t.462.725T8 18.5q0 .65.425 1.075T9.5 20m2.5-8"
                />
              </svg>

              {/* Full Tummies */}
              <div className="flex-1 flex flex-col items-start justify-start gap-2">
                <b className="self-stretch relative">Full Tummies</b>
                <div className="self-stretch relative text-sm md:text-base leading-snug text-dark-d200">
                  Ensure every stray pet gets nutritious meals by simply playing
                  the game.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start">
            <div className="w-full rounded-xl bg-white flex flex-row items-center justify-start p-5 gap-4 md:gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#320071"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M12 7.194c-1.73-3.92-5.76-4.23-7.64-2.56c-1.53 1.33-2.26 4.66-.87 7.69c2.41 5.21 8.51 8 8.51 8s6.1-2.74 8.51-7.95c1.39-3 .66-6.32-.87-7.69c-1.88-1.72-5.91-1.41-7.64 2.51" />
                  <path d="M3.34 11.964H8l3 3l3-6l2 3h4.66" />
                </g>
              </svg>

              {/* Health and Care */}
              <div className="flex-1 flex flex-col items-start justify-start gap-2">
                <b className="self-stretch relative">Health and Care</b>
                <div className="self-stretch relative text-sm md:text-base leading-snug text-dark-d200">
                  Your game plays support medical care and vaccinations for
                  stray animals.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center md:items-end justify-start">
            <div className="w-full rounded-xl bg-white flex flex-row items-center justify-start p-5 gap-4 md:gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#320071"
                  d="M10.5 13v1.5q0 .425.288.713t.712.287h1q.425 0 .713-.288t.287-.712V13H15q.425 0 .713-.288T16 12v-1q0-.425-.288-.712T15 10h-1.5V8.5q0-.425-.288-.712T12.5 7.5h-1q-.425 0-.712.288T10.5 8.5V10H9q-.425 0-.712.288T8 11v1q0 .425.288.713T9 13zm1.5 8.9q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.637T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9m0-2q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"
                />
              </svg>

              {/* Safe Streets */}
              <div className="flex-1 flex flex-col items-start justify-start gap-2">
                <b className="self-stretch relative">Safe Streets</b>
                <div className="self-stretch relative text-sm md:text-base leading-snug text-dark-d200">
                  Help us rescue more strays from the streets by engaging with
                  the game.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="hidden md:block"
        width="48"
        height="46"
        viewBox="0 0 48 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 46C2 27.296 29.551 30.0086 36.5736 34.5625C36.5736 34.5625 14.4611 2 47.5714 2"
          stroke="url(#paint0_linear_545_35743)"
          stroke-width="3.92857"
          stroke-miterlimit="10"
          stroke-linejoin="bevel"
        />
        <defs>
          <linearGradient
            id="paint0_linear_545_35743"
            x1="37.3571"
            y1="2"
            x2="7.5"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF2445" />
            <stop offset="1" stop-color="#F5AB0E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Hero;
