//Footer component
import Footer from "@/components/Footer/Footer";

//Next
import Router from "next/router";

//React Testing Library
import { render, screen } from "@testing-library/react";

describe("The Footer component", () => {
  //
  it("should render without crashing", async () => {
    render(<Footer />);
  });

  //
});
