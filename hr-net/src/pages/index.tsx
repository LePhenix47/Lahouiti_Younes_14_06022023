//Next
import { useState, useRef, useEffect } from "react";

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

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "@/redux/features/employees-list/employees-list.slice";
import { WebStorageService } from "@/react-utils/services/web-storage.service";

/**
 * Home page: `/`
 */
export default function Home(): JSX.Element {
  /**
   * State to tell the `<ModalWindow />` component whether it should open or not
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * Refs to get the values of the form
   */
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
   *
   */
  const dispatch = useDispatch();

  /**
   * We get the employees
   */
  let test = useSelector((state: any) => {
    return state.employees;
  });
  /**
   * Function that open the <dialog> element
   */
  function showModal() {
    setIsOpen(true);
  }

  /**
   * Function that submits the values of the form
   */
  function submitForm() {
    //@ts-ignore
    const firstName = firstNameInputRef?.current?.value.trim();
    //@ts-ignore
    const lastName = lastNameInputRef?.current?.value.trim();
    let dateOfBirth;
    //@ts-ignore
    let dateOfBirthIsNotNull = !!dateOfBirthInputRef?.current?.valueAsDate;

    if (dateOfBirthIsNotNull) {
      dateOfBirth =
        //@ts-ignore
        dateOfBirthInputRef?.current?.valueAsDate.toLocaleDateString("en-GB");
    } else {
      dateOfBirth = "";
    }

    //@ts-ignore
    let startDate;
    //@ts-ignore
    let startDateIsNotNull = !!startDateInputRef?.current?.valueAsDate;

    if (startDateIsNotNull) {
      startDate =
        //@ts-ignore
        startDateInputRef?.current?.valueAsDate.toLocaleDateString("en-GB");
    } else {
      startDate = "";
    }

    //@ts-ignore
    const street = streetInputRef?.current?.value.trim();
    //@ts-ignore
    const city = cityInputRef?.current?.value.trim();
    //@ts-ignore
    const state = stateInputRef?.current?.value.trim();
    //@ts-ignore
    const zipCode = zipCodeInputRef?.current?.value.trim();
    //@ts-ignore
    const department = departmentInputRef?.current?.value.trim();

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

    log({ newEmployee });

    //@ts-ignore
    dispatch(addEmployee(newEmployee));
  }

  useEffect(() => {
    const currentEmployeeList = WebStorageService.getKey("employees");
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
        <meta property="og:image" content="/HRnet-logo.svg" />

        <meta property="og:url" content="www.hr-net.com" />

        {/*
         <!--Title--> 
         */}
        <title>Home page</title>
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
            <DatePicker
              name="date-of-birth"
              id="date-of-birth"
              reference={dateOfBirthInputRef}
            />
          </section>

          <section className="home-page__form-section">
            <label htmlFor="start-date" className="home-page__label">
              Start Date
            </label>
            <DatePicker
              name="start-date"
              id="start-date"
              reference={startDateInputRef}
            />
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
                reference={stateInputRef}
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
            <SelectDropdown
              options={departments}
              id="department"
              reference={departmentInputRef}
            />
          </section>
          <section className="home-page__form-section">
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
          </section>
        </form>
      </section>
    </>
  );
}
