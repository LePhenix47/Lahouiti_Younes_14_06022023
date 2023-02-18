//React
import React from "react";

//Next
import Head from "next/head";

//Data table library
//import { DataTable } from '@lephenix47/react-datatable';

export default function Employees(): JSX.Element {
  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Welcome to the Employees page of HRnet! Here, you can view and manage all of your company's employee records in one convenient location. From here, you can easily search for and view specific employee information"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Employees page" />
        <meta
          property="og:description"
          content="Welcome to the Employees page of HRnet! Here, you can view and manage all of your company's employee records in one convenient location. From here, you can easily search for and view specific employee information"
        />
        <meta property="og:image" content="/HRnet-logo.svg" />

        <meta property="og:url" content="www.hr-net.com/employees" />

        {/*
         <!--Title--> 
         */}
        <title>Home page</title>

        {/*
         <!--Page logo--> 
        */}
        <link rel="icon" type="image/png" href="/HRnet-logo.svg" />
      </Head>

      <section className="employees-page">Employees</section>
    </>
  );
}
