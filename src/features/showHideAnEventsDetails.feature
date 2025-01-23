Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default
        Given the user is on the event list screen
        When the user views the event
        Then the event details should be collapsed by default

    Scenario: User can expand an event to see details
        Given the user is on the event list screen
        When the user clicks on the details button
        Then the event details should expand and be visible

    Scenario: User can collapse an event to hide details
        Given the user has expanded an event to view details
        When the user clicks on the details button
        Then the event details should collapse and be hidden