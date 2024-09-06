import { Contact } from "@/components/contact";
import { Divider } from "@/components/divider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import CTA from "@/components/CTA";
import Hero from "@/components/hero";
import PrimaryButton from "@/components/primaryButton";
import SecButton from "@/components/secButton";
import Image from "next/image";
import logoImage from "../assets/inverse.png";
import bannerImage from "../assets/banner.png";
import logoHeaderImage from "../assets/banner-10.png";
import Link from "next/link";
import Head from "next/head";

export default async function PrivacyPolicy() {
  return (
    <div className="w-full font-plus-jakarta m-auto flex min-h-screen flex-col items-center justify-between">
      <section className="w-full">
        <div className="centeredcontainer main-container">
          <Header />
        </div>

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
