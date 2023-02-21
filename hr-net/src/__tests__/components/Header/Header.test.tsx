//Header component
import Header from "@/components/Header/Header";

//Next
import Router, { useRouter } from "next/router";

//React Testing Library
import { render, screen } from "@testing-library/react";
import { useEffect } from "react";

/**
 * We mount the router then mock it
 */
jest.mock("next/router", () => ({
  useRouter: () => ({
    route: "/",
    pathname: "",
    query: "",
    asPath: "",
  }),
}));

describe("The header component", () => {
  //
  it("should render without crashing", async () => {
    render(<Header />);
  });

  //
});
