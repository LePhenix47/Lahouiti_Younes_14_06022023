//Next
import { useState } from "react";

//Next
import Head from "next/head";

//Utils
import { log } from "@/react-utils/functions/helper-functions";
import { states } from "@/react-utils/variables/states";
import { departments } from "@/react-utils/variables/departments";

//Components
import DatePicker from "@/components/DatePicker/DatePicker";
import SelectDropdown from "@/components/SelectDropdown/SelectDropdown";
import ModalWindow from "@/components/ModalWindow/ModalWindow";
import ModalContent from "@/components/ModalContent/ModalContent";

/**
 * Home page: `/`
 */
export default function Home(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Function that open the <dialog> element
   */
  function showModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="HRnet is a web-based human resources management application designed for a company's internal use. The application serves as a central repository to manage employee records and information, providing HR professionals with easy access to important data related to their employees. 
          The platform is built to streamline HR operations and optimize the employee experience by centralizing all employee data in one location."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home page" />
        <meta
          property="og:description"
          content="HRnet is a web-based human resources management application designed for a company's internal use. The application serves as a central repository to manage employee records and information, providing HR professionals with easy access to important data related to their employees. 
          The platform is built to streamline HR operations and optimize the employee experience by centralizing all employee data in one location."
        />
        <meta property="og:image" content="/images/svg/icon.svg" />

        <meta property="og:url" content="www.hr-net.com" />

        {/*
         <!--Title--> 
         */}
        <title>Home page</title>

        {/*
         <!--Page logo--> 
        */}
        <link rel="icon" type="image/png" href="/HRnet-logo.svg" />
      </Head>

      <section className="home-page">
        <h1 className="home-page__title">HRnet</h1>

        <h2 className="home-page__subtitle">Add employee</h2>

        <ModalWindow
          content={<ModalContent />}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        <form
          className="home-page__form"
          action="#"
          onSubmit={(e) => {
            return e.preventDefault();
          }}
        >
          <section className="home-page__form-section">
            <label htmlFor="first-name" className="home-page__label">
              First Name
            </label>
            <input type="text" className="home-page__input" id="first-name" />
          </section>

          <section className="home-page__form-section">
            <label htmlFor="last-name" className="home-page__label">
              Last Name
            </label>
            <input type="text" className="home-page__input" id="last-name" />
          </section>

          <section className="home-page__form-section">
            <label htmlFor="date-of-birth" className="home-page__label">
              Date of Birth
            </label>
            <DatePicker name="date-of-birth" id="date-of-birth" />
          </section>

          <section className="home-page__form-section">
            <label htmlFor="start-date" className="home-page__label">
              Start Date
            </label>
            <DatePicker name="start-date" id="start-date" />
          </section>

          <section className="home-page__form-section">
            <fieldset className="home-page__fieldset">
              <legend className="home-page__legend">Address</legend>

              <label htmlFor="street" className="home-page__label">
                Street
              </label>
              <input type="text" className="home-page__input" id="street" />

              <label htmlFor="city" className="home-page__label">
                City
              </label>
              <input type="text" className="home-page__input" id="city" />

              <label htmlFor="state" className="home-page__label">
                State
              </label>
              <SelectDropdown
                options={states}
                id="state"
                object
                propertyName="name"
                valueForOption="abbreviation"
              />

              <input type="text" className="home-page__input" id="state" />

              <label htmlFor="zip-code" className="home-page__label">
                ZipCode
              </label>
              <input type="text" className="home-page__input" id="zip-code" />
            </fieldset>
          </section>

          <section className="home-page__form-section">
            <label htmlFor="department" className="home-page__label">
              Department
            </label>
            <SelectDropdown options={departments} id="department" />
          </section>

          <button
            type="submit"
            onClick={() => {
              showModal();
            }}
            className="home-page__save-button"
          >
            Save
          </button>
        </form>
      </section>
    </>
  );
}
