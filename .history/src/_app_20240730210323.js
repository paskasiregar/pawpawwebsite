import "../styles/globals.css"; // Import your global CSS
import Head from "next/head";
import logoFavicon from "../assets/inverse.png";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PawPaw Portal | Your One Stop Shelter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
