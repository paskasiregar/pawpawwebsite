import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Script
        type="text/javascript"
        src="//pl24310112.cpmrevenuegate.com/cc/a3/1e/cca31e5e9811b252527560f4431eff54.js"
      ></Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JXSG3Z992D"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}

export default PawPawPortal;
