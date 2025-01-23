Feature: Specify number of events
    Scenario: When user hasn’t specified a number, 32 events are shown by default
        Given the user is on the event list screen
        And the user has not specified the number of events to display
        When the app loads the events
        Then 32 events should be displayed by default

    Scenario: User can change the number of events displayed
        Given the user is on the event list screen
        When the user specifies a number of events to display
        Then the app should display the specified number of events