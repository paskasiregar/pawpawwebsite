import "../styles/globals.css"; // Import your global CSS
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PawPaw Portal | Your One Stop Shelter</title>
        <link rel="icon" href="../assets/inverse.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
