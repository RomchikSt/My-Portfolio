# WorldWise

[![StandWithUkraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://github.com/vshymanskyy/StandWithUkraine/blob/main/docs/README.md)

## Description

WorldWise is an application designed for travelers. It allows users to pinpoint locations they've visited on a map, provide specific details about their visits, and keep track of both cities and countries they've been to.
![Screenshot 2023-09-21 at 23 39 17](https://github.com/RomchikSt/Portfolio/assets/140477189/93740338-d4ff-42fb-8243-6f957cd22ce8)

## Install and Run the Project

1. Clone or download the repository.
2. Navigate to the project directory.
3. Install the required packages: `npm install`.
4. Run the project: `npm run dev`.
5. Run virtual server: `npm run server`

## How to Use

1. Click the Login button or START TRACKING NOW.
2. Use the pre-filled username and password, then click Login.
3. View visited cities under CITIES and countries under COUNTRIES.
4. To add a new city, click on its location on the map. A form will appear asking for confirmation of the city and for details about your trip.
5. After verifying and filling out details, click Add. If you change your mind, click ← BACK.
6. Click on any listed city to view the date of your visit, notes about your trip, and a link to a Wikipedia article about the city.
7. To determine your exact current location, click the Use your position button below the map.
8. When you're finished, click Logout.
9. Clicking the logo returns you to the main page.

## Features

- Interactive Map: Easily select cities directly from the map.
- Detailed Notes: Add specific notes and memories from each of your visits.
- Auto-Location: Instantly determine and mark your current location.
- Wikipedia Integration: Learn more about each city with a direct link to its Wikipedia page.

## Technologies & Libraries Used

- React & ReactDOM
- Leaflet & React-Leaflet
- React Datepicker
- JSON Server: Mock backend server for prototyping and development.
- Vite: As a build tool and development server.
- ESLint: For code linting and ensuring code quality.
- Vite's React Plugin: Enhancing Vite's compatibility with React.
