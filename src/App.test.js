import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/; //using regex for a format of 'anything@anything.anything'
  return re.test(email);
}

describe("form-email", () => {
  test("should show error if not correct input", () => {
    const email = "anything@any.thing";
    expect(validateEmail(email)).toBe(true);
  });
});
