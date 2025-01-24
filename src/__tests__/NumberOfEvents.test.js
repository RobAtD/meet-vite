/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
  });

  test("renders input field", () => {
    const inputNumber = NumberOfEventsComponent.queryByRole("textbox");
    expect(inputNumber).toBeInTheDocument();
  });

  test("input field has a default value of 32", () => {
    const inputNumber = NumberOfEventsComponent.queryByRole("textbox");
    expect(inputNumber).toHaveValue("32");
  });

  test("input field changes value to '10' when user types '10'", async () => {
    const inputNumber = NumberOfEventsComponent.queryByRole("textbox");
    const user = userEvent.setup();
    await user.type(inputNumber, "{backspace}{backspace}10");
    expect(inputNumber).toHaveValue("10");
  });
});
