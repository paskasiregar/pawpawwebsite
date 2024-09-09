import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src="//pl24310112.cpmrevenuegate.com/cc/a3/1e/cca31e5e9811b252527560f4431eff54.js"
        ></script>

        {/* Google Analytics */}
        <script
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-JXSG3Z992D"
        ></script>
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JXSG3Z992D');
      `,
          }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default PawPawPortal;