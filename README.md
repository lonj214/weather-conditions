# weather-conditions

## Description

- My motivation for building this webpage was wanting to learn how to use a weather API, and apply that skill to building a weather app.
- I built this webpage so that users can check the weather in their city or a city that they plan to visit.
- This gives users the ability to check the current weather as well as what the weather will look like the next 5 days in the city that they typed in.
- I learned how to use a weather API. I learned how to apply that API to my JS file.


## Installation

- I started by building the index.html, then the style.css.
- In my js file I started with creating my constants for the API key and some of the ID's from the html file.
- I created an asyn function that includes my constants for the API URL and the forecast URL.
- In that same function I made another constant for response that fetches the 'apiUrl'. There are 2 response options, for an invalid city and a valid city.
- I put in a for loop for the forecast so that way it displays in the console the weather for the next 5 days at noon. 
- I created an event listener for the search button.
- In the same function under the event listener I created a variable for history, so that way it stores all cities the user searched into local storage. To do this I added the methods 'setItem' and 'getItem'.

## Usage

- When users open my webpage they can type in a valid city name.
- If the user enters an invalid city name a message will appear saying "City could not be found".
- Once the user has entered a valid city name an icon will appear that matches the weather condition, the temperature in degrees celcius, the humidity, and the wind speed.
- It will show the forecast for the following 5 days.
- The users search history will be saved into local storage.

## License

MIT license

## Direct Link to Deployed Site

[link](https://lonj214.github.io/weather-conditions/)

## Deployment
The application is deployed at live URL
The application is loading with no errors

## Screenshots

![screenshot](weather-1.png)
![screenshot](weather-2.png)
![screenshot](weather-3.png)
![screenshot](weather-4.png)