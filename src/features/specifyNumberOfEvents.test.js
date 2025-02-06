/**
 * @jest-environment jsdom
 */
import { defineFeature, loadFeature } from "jest-cucumber";
import React from "react";
import App from "../App";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 events are shown by default", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent;
    let EventListDOM;
    let AppDOM;
    given("the user is on the event list screen", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        EventListDOM = AppDOM.querySelector("#event-list");
        expect(EventListDOM).toBeInTheDocument();
      });
    });

    and("the user has not specified the number of events to display", () => {
      const eventsNumberDOM = AppDOM.querySelector("#events-number");
      const numberInput = within(eventsNumberDOM).queryByRole("textbox");

      expect(numberInput).toHaveValue("32");
    });

    let eventListItems;
    when("the app loads the events", async () => {
      await waitFor(() => {
        eventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(eventListItems).not.toHaveLength(0);
      });
    });

    then("32 events should be displayed by default", () => {
      expect(eventListItems).toHaveLength(32);
    });
  });

  test("User can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let EventListDOM;
    let AppDOM;
    given("the user is on the event list screen", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        EventListDOM = AppDOM.querySelector("#event-list");
        expect(EventListDOM).toBeInTheDocument();
      });
    });

    when("the user specifies a number of events to display", async () => {
      const user = userEvent.setup();
      const eventsNumberDOM = AppDOM.querySelector("#events-number");
      const numberInput = within(eventsNumberDOM).queryByRole("textbox");
      await user.type(numberInput, "{backspace}{backspace}10");
      expect(numberInput).toHaveValue("10");
    });

    then("the app should display the specified number of events", async () => {
      await waitFor(()=> {
        EventListDOM = AppDOM.querySelector("#event-list");
        const eventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(eventListItems).toHaveLength(10);
      })
    });
  });
});
