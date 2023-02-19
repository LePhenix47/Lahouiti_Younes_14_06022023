//React
import React from "react";

//Next
import Head from "next/head";

//Data table library
//import { DataTable } from '@lephenix47/react-datatable';

import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { log } from "@/react-utils/functions/helper-functions";

const HydratedDataTable = dynamic(
  () =>
    import("@lephenix47/react-datatable").then((module) => module.DataTable),
  { ssr: false }
);

/**
 * Home page: `/employees`
 */
export default function Employees(): JSX.Element {
  const data = useSelector((state: any) => {
    return state.employees;
  });

  log(data.list);

  const { list } = data;

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

      <section className="employees-page">
        <HydratedDataTable data={list} paging sort filter info />
        {/* <HydratedDataTable data={list} scroll height={200} sort filter info /> */}
      </section>
    </>
  );
}
