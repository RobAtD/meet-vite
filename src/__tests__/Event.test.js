import React from "react";
import Event from "../components/Event";
import { render } from "@testing-library/react";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("renders event title", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("renders event start time", () => {
    expect(
      EventComponent.queryByText(allEvents[0].created)
    ).toBeInTheDocument();
  });

  test("renders event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    const eventDetailsButton = EventComponent.queryByText("show details");
    expect(eventDetailsButton).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    const eventDetails = EventComponent.container.querySelector('.details');
    expect(eventDetails).not.toBeInTheDocument();
  });

  test('shows the details section when the user clicks on the "show details" button', async ()=> {
    const user = userEvent.setup();
    const eventDetailsButton = EventComponent.queryByText('show details');
    await user.click(eventDetailsButton);
    const eventDetails = EventComponent.container.querySelector(".details");
    expect(eventDetails).toBeInTheDocument();
  });

  test('hide the details section when the user clicks on the "hide details" button', async ()=> {
    const user = userEvent.setup();
    const eventHideDetailsButton = EventComponent.queryByText("hide details");
    await user.click(eventHideDetailsButton);
    const eventDetails = EventComponent.container.querySelector(".details");
    expect(eventDetails).not.toBeInTheDocument();
  })
});
