//React
import React, { useEffect, useRef, useState } from "react";

//Next
import Head from "next/head";
import dynamic from "next/dynamic";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "@/redux/features/employees-list/employees-list.slice";

//Utils
import { log } from "@/react-utils/functions/helper-functions";
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
  let data = useSelector((state: any) => {
    return state.employees;
  });

  log(data.list);

  let { list } = data;

  const [employeesList, setEmployeesList] = useState<any[]>([]);

  /**
   *
   */
  const dispatch = useDispatch();

  useEffect(() => {
    const savedEmployeeList = WebStorageService.getKey("employees") || [];
    // dispatch(addEmployee(savedEmployeeList));
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

        {/*
         <!--Page logo--> 
        */}
        <link rel="icon" type="image/png" href="/HRnet-logo.svg" />
      </Head>

      <section className="employees-page">
        <h1 className="employees-page__title">Current employees</h1>
        <HydratedDataTable //@ts-ignore
          data={dataMock}
          paging
          // scroll
          // height={1_000}
          sort
          filter
          info
        />
      </section>
    </>
  );
}
