//React
import Head from "next/head";
import React from "react";

export default function Error404(): JSX.Element {
  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Sorry, the page you were looking for is not available. Please try again or contact us for assistance."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Page not found" />
        <meta
          property="og:description"
          content="Sorry, the page you were looking for is not available. Please try again or contact us for assistance."
        />
        <meta property="og:image" content="/HRnet-logo.svg" />

        <meta property="og:url" content="www.hr-net.com/404" />

        {/*
         <!--Title--> 
         */}
        <title>Page not found</title>

        {/*
         <!--Page logo--> 
        */}
        <link rel="icon" type="image/png" href="/HRnet-logo.svg" />

        {/*     Canonical link     */}

        <link rel="canonical" href="https://www.hr-net.com/" />
      </Head>
      <section className="error-404">
        <h1 className="error-404__title">Well… ¯\_(ツ)_/¯</h1>
        <h2 className="error-404__subtitle">
          It looks like you&apos;ve stumbled upon a missing page buddy.
        </h2>
        <p className="error-404__paragraph">
          Our HR team is probably just taking a break and will be back to work
          on this issue soon. In the meantime, you can try navigating back to
          the homepage or contact our support team for assistance.
        </p>
      </section>
    </>
  );
}
