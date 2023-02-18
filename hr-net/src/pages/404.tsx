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
          content="Welcome to the Employees page of HRnet! Here, you can view and manage all of your company's employee records in one convenient location. From here, you can easily search for and view specific employee information"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home page" />
        <meta
          property="og:description"
          content="Welcome to the Employees page of HRnet! Here, you can view and manage all of your company's employee records in one convenient location. From here, you can easily search for and view specific employee information"
        />
        <meta property="og:image" content="/images/svg/icon.svg" />

        <meta property="og:url" content="www.hr-net.com/404" />

        {/*
         <!--Title--> 
         */}
        <title>Page not found</title>

        {/*
         <!--Page logo--> 
        */}
        <link rel="icon" type="image/png" href="/images/svg/icon.svg" />
      </Head>
      <section className="error-404">404</section>
    </>
  );
}
