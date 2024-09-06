import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PawPaw Portal | Your One Stop Shelter</title>
        <link rel="icon" href="/inverse.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default PawPawPortal;
