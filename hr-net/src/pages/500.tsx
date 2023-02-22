//React
import Head from "next/head";
import React from "react";

export default function Error500(): JSX.Element {
  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="noindex, follow" />

        <meta
          name="description"
          content="Oops, something went wrong. We apologize for the inconvenience and are working to fix the issue. Please try again later or contact us for assistance."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Internal Server Error - HRnet" />
        <meta
          property="og:description"
          content="Oops, something went wrong. We apologize for the inconvenience and are working to fix the issue. Please try again later or contact us for assistance."
        />
        <meta property="og:image" content="/HRnet-logo.svg" />

        <meta property="og:url" content="www.hr-net.com/500" />

        {/*
         <!--Title--> 
         */}
        <title>Internal Server Error - HRnet</title>

        {/*
         <!--Page logo--> 
        */}
        <link rel="icon" type="image/png" href="/HRnet-logo.svg" />

        {/*     Canonical link     */}

        <link rel="canonical" href="https://www.hr-net.com/" />
      </Head>
      <section className="error-500">
        <h1 className="error-500__title">Sorry… ಠ_ಠ</h1>
        <h2 className="error-500__subtitle">
          It looks like our servers are experiencing a bit of a meltdown right
          now.
        </h2>
        <p className="error-500__paragraph">
          Snap! It seems that our HR department couldn&apos;t handle all the
          workplace drama and the server just imploded, no worries we&apos;re
          currently trying to mediate the conflict between two employees who
          both want to use the same stapler.
        </p>
      </section>
    </>
  );
}
