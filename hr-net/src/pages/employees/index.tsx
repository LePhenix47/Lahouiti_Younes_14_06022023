//React
import React, { useEffect, useRef, useState } from "react";

//Next
import Head from "next/head";
import dynamic from "next/dynamic";

//Redux
import { useDispatch, useSelector } from "react-redux";

//Utils
import { WebStorageService } from "@/react-utils/services/web-storage.service";

//Assets
import { dataMock } from "@/assets/mocks/data.mock";

//Data table library
/**
 * We import the component dynamically
 */
const HydratedDataTable = dynamic(
  () =>
    //@ts-ignore
    import("@lephenix47/react-datatable").then((module) => module.DataTable),
  { ssr: false }
);

/**
 * Home page: `/employees`
 */
export default function Employees(): JSX.Element {
  /**
   * Hook to dispatch an action
   */
  const dispatch = useDispatch();
  /**
   * Data store in the Redux state
   */
  let data = useSelector((state: any) => {
    return state.employees;
  });

  let { list } = data;

  const [employeesList, setEmployeesList] = useState<any[]>([]);

  useEffect(() => {
    const savedEmployeeList = WebStorageService.getKey("employees") || [];
    setEmployeesList(savedEmployeeList);
  }, []);

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
        <title>Employees page</title>
      </Head>

      <section className="employees-page">
        <h1 className="employees-page__title">Current employees</h1>
        <HydratedDataTable
          //@ts-ignore
          data={dataMock}
          paging
          sort
          filter
          info
        />
      </section>
    </>
  );
}
