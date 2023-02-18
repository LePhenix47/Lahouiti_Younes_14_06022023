//Next
import { useState, useRef } from "react";

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
import { useDispatch } from "react-redux";

//Redux
/**
 * Home page: `/`
 */
export default function Home(): JSX.Element {
  /**
   * State to tell the `<ModalWindow />` component whether it should open or not
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const firstNameInputRef = useRef(null);

  const lastNameInputRef = useRef(null);

  const dateOfBirthInputRef = useRef(null);

  const startDateInputRef = useRef(null);

  const streetInputRef = useRef(null);

  const cityInputRef = useRef(null);

  const stateInputRef = useRef(null);

  const zipCodeInputRef = useRef(null);

  const departmentInputRef = useRef(null);

  /**
   * Function that open the <dialog> element
   */
  function showModal() {
    setIsOpen(true);
  }

  //
  const dispatch = useDispatch();

  /**
   * Function that submits the values of the form
   */
  function submitForm() {
    log("Submitting form");
    //@ts-ignore
    const firstName = firstNameInputRef?.current?.value;
    //@ts-ignore
    const lastName = lastNameInputRef?.current?.value;
    //@ts-ignore
    const dateOfBirth = dateOfBirthInputRef?.current?.valueAsDate;
    //@ts-ignore
    const startDate = startDateInputRef?.current?.valueAsDate;
    //@ts-ignore
    const street = streetInputRef?.current?.value;
    //@ts-ignore
    const city = cityInputRef?.current?.value;
    //@ts-ignore
    const state = stateInputRef?.current?.value;
    //@ts-ignore
    const zipCode = zipCodeInputRef?.current?.value;
    //@ts-ignore
    const department = departmentInputRef?.current?.value;

    const newEmployee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    };

    // Add the new employee with the useDispatch()
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

      <ModalWindow
        content={<ModalContent />}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <section className="home-page">
        <h1 className="home-page__title">HRnet</h1>

        <h2 className="home-page__subtitle">Add employee</h2>

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
            <input
              type="text"
              className="home-page__input"
              id="first-name"
              ref={firstNameInputRef}
            />
          </section>

          <section className="home-page__form-section">
            <label htmlFor="last-name" className="home-page__label">
              Last Name
            </label>
            <input
              type="text"
              className="home-page__input"
              id="last-name"
              ref={lastNameInputRef}
            />
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
              <input
                type="text"
                className="home-page__input"
                id="street"
                ref={streetInputRef}
              />

              <label htmlFor="city" className="home-page__label">
                City
              </label>
              <input
                type="text"
                className="home-page__input"
                id="city"
                ref={cityInputRef}
              />

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

              <label htmlFor="zip-code" className="home-page__label">
                ZipCode
              </label>
              <input
                type="text"
                className="home-page__input"
                id="zip-code"
                ref={zipCodeInputRef}
              />
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
              submitForm();
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
