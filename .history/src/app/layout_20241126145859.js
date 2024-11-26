import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PawPaw Portal | Game-based Donation",
  description: "Play a game and you already donate!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="clckd" content="544541ede95458fc03a27ec7255445c5" />

        {/* Hilltop Ads */}
        <meta
          name="448bfa58144e374d75be345a1be4d6e7fe0f0c0c"
          content="448bfa58144e374d75be345a1be4d6e7fe0f0c0c"
        />

        {/* <meta
          name="google-adsense-account"
          content="ca-pub-4770655134097556"
        ></meta> */}
      </Head>
      <body className={inter.className}>{children}</body>
      {/* <Script
        type="text/javascript"
        src="//pl24310112.cpmrevenuegate.com/cc/a3/1e/cca31e5e9811b252527560f4431eff54.js"
      ></Script> */}
    </html>
  );
}
