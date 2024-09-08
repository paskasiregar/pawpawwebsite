import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JXSG3Z992D"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JXSG3Z992D');
            `,
          }}
        />
        <title>PawPaw Portal | Your One Stop Shelter</title>
        <link rel="icon" href="/inverse.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default PawPawPortal;
