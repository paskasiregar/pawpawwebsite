import React from "react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Image from "next/image";
import { logoFooterImage } from "@/assets/inverse.png";

export default async function Privacy() {
  return (
    <div className="w-full font-plus-jakarta mx-auto flex flex-col items-center justify-between min-h-screen">
      <section className="w-full">
        <div className="w-full">
          <div>
            <CTA />
          </div>

          <div className="container mx-auto p-4">
            <div className="text-black text-3xl md:text-4xl font-extrabold my-4">
              Privacy Policy
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              PawPaw Portal
            </h1>
            <div className="space-y-4">
              <div className="space-y-4">
                <p className="text-sm md:text-med text-gray-800 mb-4">
                  PawPaw Portal Indonesia is a national animal welfare charity
                  with a vision for a future where every pet is safe, respected,
                  and loved.
                </p>
              </div>
            </div>
            <p className="mb-10 text-sm md:text-base text-gray-600">
              Last updated: [6 Sept 2024]
            </p>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold">
                1. Introduction
              </h2>
              <p className="text-sm md:text-base">
                Welcome to PawPaw Portal. We are committed to protecting your
                personal information and your right to privacy. This Privacy
                Policy outlines how we collect, use, and share your information
                when you play our game and interact with the platform, including
                how we use advertising revenue to support animal shelters.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold">
                2. Information We Collect
              </h2>
              <p className="text-sm md:text-base">
                When you use PawPaw Portal, we may collect certain information,
                including:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base">
                <li>Account Information (such as name, email, etc.)</li>
                <li>
                  Game Interaction Data (e.g., gameplay history, rewards earned)
                </li>
                <li>
                  Ad Interaction Data (e.g., which ads are displayed and
                  clicked)
                </li>
                <li>Technical Data (IP address, browser type, etc.)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold">
                3. How We Use Your Information
              </h2>
              <p className="text-sm md:text-base">
                We use the information we collect to provide you with an
                enjoyable and engaging gaming experience. Specifically, we use
                your data to:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base">
                <li>Enhance your gameplay experience</li>
                <li>Display relevant advertisements</li>
                <li>
                  Measure the effectiveness of ads and distribute ad revenue to
                  shelters
                </li>
                <li>Improve the platform and user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold">
                4. Advertising and Revenue Distribution
              </h2>
              <p className="text-sm md:text-base">
                PawPaw Portal generates revenue through advertisements shown
                during gameplay. The revenue we receive from these ads is
                distributed to partnered animal shelters. Your interaction with
                these ads (e.g., views and clicks) may be shared with
                advertisers to measure their effectiveness.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold">
                5. How We Protect Your Information
              </h2>
              <p className="text-sm md:text-base">
                We take the security of your data seriously and use appropriate
                measures to protect your personal information from unauthorized
                access or disclosure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold">
                6. Sharing Your Information
              </h2>
              <p className="text-sm md:text-base">
                We do not sell or rent your personal information to third
                parties. However, we may share certain data with trusted service
                providers (e.g., ad partners) who help us operate and maintain
                the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold">
                7. Your Rights
              </h2>
              <p className="text-sm md:text-base">
                You have the right to access, update, or delete your personal
                information. If you wish to exercise any of these rights, please
                contact us at [email].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-sm md:text-base">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this
                page.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold">
                9. Contact Us
              </h2>
              <p className="text-sm md:text-base">
                If you have any questions about this Privacy Policy, please
                contact us at [email].
              </p>
            </section>
          </div>

          <div id="about-us">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
