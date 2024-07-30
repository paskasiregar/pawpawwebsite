import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PawPaw Portal | Your One-Stop Shelter",
  description: "Your One-Stop Shelter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/inverse.png" type="image/png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
