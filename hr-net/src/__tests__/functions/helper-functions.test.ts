import { formatText } from "@/react-utils/functions/helper-functions";

import { render, screen } from "@testing-library/react";

describe("The helper function:", () => {
  //
  it("formatText, should format this string to lowercase", () => {
    const string = "HELLO EVERYONE!";

    let formattedString = formatText(string, "lowercase");

    const lowercaseStringResult = string.toLowerCase();

    expect(formattedString).toEqual(lowercaseStringResult);
  });
  //
});
