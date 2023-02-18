import Head from "next/head";

export default function Home(): JSX.Element {
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
        <link rel="icon" type="image/png" href="/images/svg/icon.svg" />
      </Head>

      <section className="home-page">
        <h1 className="home-page__title">HRnet</h1>

        <h2 className="home-page__subtitle">Add employee</h2>

        <form
          action="#"
          onSubmit={(e) => {
            return e.preventDefault();
          }}
        >
          <button type="submit">Save</button>
        </form>
      </section>
    </>
  );
}
