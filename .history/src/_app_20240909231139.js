import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Script
          type="text/javascript"
          src="//pl24310112.cpmrevenuegate.com/cc/a3/1e/cca31e5e9811b252527560f4431eff54.js"
        ></Script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default PawPawPortal;
