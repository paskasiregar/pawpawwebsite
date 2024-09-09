import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          type="text/javascript"
          src="https://www.cpmrevenuegate.com/i1djf8hvc?key=f6a951a7de58a7b506667e66a8863e50"
        ></script>
        <script
          async
          type="text/javascript"
          src="//pl24310112.cpmrevenuegate.com/cc/a3/1e/cca31e5e9811b252527560f4431eff54.js"
        ></script>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JXSG3Z992D"
        ></script>
        <script
          async
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
