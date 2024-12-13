# Meet app

The **Meet App** is a modern web application designed to help users discover and explore events in different cities. By leveraging the power of serverless architecture and Progressive Web Apps (PWAs), the Meet App delivers a seamless, fast, and cross-platform experience.

## Key Features

### Filter Events By City

As a user,</br>
I should be able to filter events by city</br>
So that I can see a list of events taking place in that city.</br>

**Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.**</br></br>
Given the user is on the event list screen</br>
And the user has not entered a city in the search bar</br>
When the app loads the events</br>
Then the app should display upcoming events from all cities

**Scenario 2: User should see a list of suggestions when they search for a city.**</br></br>
Given the user is on the event list screen</br>
When the user enters a city name or partial name in the search bar</br>
Then the app should display a list of city suggestions matching the entered text

**Scenario 3: User can select a city from the suggested list.**</br></br>
Given the user is on the event list screen</br>
And the app has displayed a list of city suggestions</br>
When the user selects a city from the list</br>
Then the app should filter and display events from the selected city

### Show/Hide Event Details

As a user, </br>
I should be able to toggle the visibility of event details, </br>
So that I can view more information when needed or hide it for a cleaner interface.</br>

**Scenario 1: An event element is collapsed by default**</br></br>
Given the user is on the event list screen</br>
When the user views the event</br>
Then the event details should be collapsed by default

**Scenario 2: User can expand an event to see details**</br></br>
Given the user is on the event list screen</br>
When the user clicks on an event element</br>
Then the event details should expand and be visible

**Scenario 3: User can collapse an event to hide details**</br></br>
Given the user has expanded an event to view details</br>
When the user clicks on the expanded event element</br>
Then the event details should collapse and be hidden

### Specify Number of Events

As a user, </br>
I should be able to specify the number of events to display, </br>
So that I can control how many events I see at once, based on my preferences.

**Scenario 1: When user hasn’t specified a number, 32 events are shown by default.**</br></br>
Given the user is on the event list screen</br>
And the user has not specified the number of events to display</br>
When the app loads the events</br>
Then 32 events should be displayed by default

**Scenario 2: User can change the number of events displayed**</br></br>
Given the user is on the event list screen</br>
When the user specifies a number of events to display</br>
Then the app should display the specified number of events

### Use the App When Offline

As a user, </br>
I should be able to access event information offline, </br>
So that I can view event details even when I don't have an internet connection.

**Scenario 1: Show cached data when there’s no internet connection**</br></br>
Given the user is offline</br>
And the app has cached event data</br>
When the user opens the event list screen</br>
Then the app should display the cached event data

**Scenario 2: Show error when user changes search settings (city, number of events).**</br></br>
Given the user is offline</br>
When the user attempts to change search settings (e.g., city or number of events)</br>
Then the app should display an error message indicating that the changes cannot be made without an internet connection

### Add an App Shortcut to the Home Screen

As a user, </br>
I should be able to add a shortcut to the app on my home screen, </br>
So that I can quickly access the app without navigating through my phone's app list.

**Scenario 1: User can install the Meet app as a shortcut on their device home screen**</br></br>
Given the user is using a compatible device and browser</br>
When the user selects the "Add to Home Screen" option in the app menu</br>
Then the app should prompt the user to confirm the addition</br>
And after confirmation, the Meet app shortcut should appear on the device home screen

### Display Charts Visualizing Event Details

As a user, </br>
I should be able to see charts visualizing event details, </br>
So that I can better understand the event data, such as attendance or other metrics, at a glance.

**Scenario 1: Show a chart with the number of upcoming events in each city**</br></br>
Given the user is on the event list screen</br>
And there are upcoming events available in multiple cities</br>
When the user views the event details visualization</br>
Then the app should display a chart showing the number of upcoming events in each city