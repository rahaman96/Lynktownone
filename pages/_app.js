import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <NextGtag trackingId="GTM-MF5LB4V" /> */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
