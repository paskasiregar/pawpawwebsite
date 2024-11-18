import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="clckd" content="75dc524e2732cc4c467a23fcc67502c5" />
      </Head>

      {/* CPM Revenue script */}
      {/* <Script
        type="text/javascript"
        src="//pl24310112.cpmrevenuegate.com/cc/a3/1e/cca31e5e9811b252527560f4431eff54.js"
      ></Script> */}

      {/* Google Tag Manager script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JXSG3Z992D"
      ></Script>

      {/* Inline GTM script */}
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JXSG3Z992D');
          `,
        }}
      />

      {/* Google Adsense*/}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4770655134097556"
        crossorigin="anonymous"
      ></Script>

      {/* Render the rest of the app */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
