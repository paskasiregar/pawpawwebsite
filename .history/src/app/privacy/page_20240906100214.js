import React from "react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Image from "next/image";

export default async function Privacy() {
  return (
    <div className="w-full font-plus-jakarta m-auto flex min-h-screen flex-col items-center justify-between">
      <section className="w-full">
        <div className="w-full">
          <div>
            <CTA />
          </div>
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
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-10 text-gray-500">Last updated: [6 Sept 2024]</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p>
                Welcome to PawPaw Portal. We are committed to protecting your
                personal information and your right to privacy. This Privacy
                Policy outlines how we collect, use, and share your information
                when you play our game and interact with the platform, including
                how we use advertising revenue to support animal shelters.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">
                2. Information We Collect
              </h2>
              <p>
                When you use PawPaw Portal, we may collect certain information,
                including:
              </p>
              <ul className="list-disc list-inside">
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
              <h2 className="text-2xl font-semibold">
                3. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to provide you with an
                enjoyable and engaging gaming experience. Specifically, we use
                your data to:
              </p>
              <ul className="list-disc list-inside">
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
              <h2 className="text-2xl font-semibold">
                4. Advertising and Revenue Distribution
              </h2>
              <p>
                PawPaw Portal generates revenue through advertisements shown
                during gameplay. The revenue we receive from these ads is
                distributed to partnered animal shelters. Your interaction with
                these ads (e.g., views and clicks) may be shared with
                advertisers to measure their effectiveness.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">
                5. How We Protect Your Information
              </h2>
              <p>
                We take the security of your data seriously and use appropriate
                measures to protect your personal information from unauthorized
                access or disclosure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">
                6. Sharing Your Information
              </h2>
              <p>
                We do not sell or rent your personal information to third
                parties. However, we may share certain data with trusted service
                providers (e.g., ad partners) who help us operate and maintain
                the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">7. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal
                information. If you wish to exercise any of these rights, please
                contact us at [email].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold">
                8. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this
                page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">9. Contact Us</h2>
              <p>
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
