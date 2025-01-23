/**
 * @jest-environment jsdom
 */
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { defineFeature, loadFeature } from "jest-cucumber";
import React from "react";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppComponent;
    let EventListDOM;
    given("the user is on the event list screen", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
    });

    when("the user views the event", async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).not.toBe(0);
      });
    });

    then("the event details should be collapsed by default", () => {
      const EventListItemDOM = EventListDOM.querySelector(".event");
      const eventDetails = EventListItemDOM.querySelector(".details");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see details", ({ given, when, then }) => {
    let AppComponent;
    let EventListDOM;
    let detailsButton;
    let eventListItem;
    given("the user is on the event list screen", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        eventListItem = EventListDOM.querySelectorAll(".event");
        detailsButton = eventListItem[0].querySelector(".details-btn");
      });
    });

    when("the user clicks on the details button", async () => {
      const user = userEvent.setup();
      await user.click(detailsButton);
    });

    then("the event details should expand and be visible", () => {
      const eventDetails = eventListItem[0].querySelector(".details");
      expect(eventDetails).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let EventListDOM;
    let detailsButton;
    let eventListItem;
    let eventDetails;
    given("the user has expanded an event to view details", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
      const user = userEvent.setup();

      await waitFor(() => {
        eventListItem = EventListDOM.querySelectorAll(".event");
        detailsButton = eventListItem[0].querySelector(".details-btn");
      });

      await user.click(detailsButton);
      
      await waitFor(()=> {
       eventDetails = eventListItem[0].querySelector(".details");
       expect(eventDetails).toBeInTheDocument();
      });  
    });

    when("the user clicks on the details button", async () => {
        const user = userEvent.setup();
        await user.click(detailsButton);
    });

    then("the event details should collapse and be hidden", () => {
        expect(eventDetails).not.toBeInTheDocument();
    });
  });
});
