import "../styles/globals.css"; // Import your global CSS
import Head from "next/head";

function v4_pawpawwebsite({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PawPaw Portal | Your One Stop Shelter</title>
        <link rel="icon" href="/public/inverse.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default v4_pawpawwebsite;
