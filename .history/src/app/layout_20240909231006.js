import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PawPaw Portal | Your One-Stop Shelter",
  description: "Your One-Stop Shelter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-adsense-account"
        content="ca-pub-4770655134097556"
      ></meta>
      <body className={inter.className}>{children}</body>
      <Script
        type="text/javascript"
        src="//pl24310112.cpmrevenuegate.com/cc/a3/1e/cca31e5e9811b252527560f4431eff54.js"
      ></Script>
    </html>
  );
}
