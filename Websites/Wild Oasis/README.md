# The Wild Oasis

[![StandWithUkraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://github.com/vshymanskyy/StandWithUkraine/blob/main/docs/README.md)

## Description

The Wild Oasis is a full-stack hotel management application, with the backend powered by Supabase. Designed to streamline the intricate tasks of hotel operations, this platform facilitates real-time room tracking, swift guest reservations, check-in and check-out processes, and generates insightful statistics about room occupancy and guest behavior.

![Screenshot 2024-01-17 at 15 48 26](https://github.com/RomchikSt/other-portfolio-projects/assets/140477189/a7f8381c-51c5-4eab-8576-f35a23d3e9c8)


## Live Demo

Try out the application in action [here](https://rstp-wild-oasis.netlify.app/)

## Install and Run the Project

1. Clone or download the repository.
2. Navigate to the project directory.
3. Install the required packages: `npm install`.
4. Run the project: `npm run dev`.

## How to Use

1. Upon opening, you'll be greeted with a login window. Use the provided login credentials and click "Login" to proceed.
2. The main landing page is the dashboard, where key data is presented in an easy-to-understand format. You can also select specific date ranges for data display.
3. Navigate to "Bookings" from the side menu to view upcoming client reservations. You can filter these by status, sort alphabetically (or reverse-alphabetically), and by total payment (ascending or descending). A three-dot menu next to each client allows for viewing, editing, status updates, and deletion.
4. "Cabins" in the side menu provides a table summary of hotel rooms. Each entry has a three-dot menu for options like duplication, editing, and deletion. There's also an option to add a new cabin press"Add new cabin" in the bottom.
5. Under "Users", you can create new users, allowing them access to the application. A confirmation link will be sent to the provided email for verification.
6. In the "Settings" tab, you can modify certain hotel details. Note that any numerical change made will auto-save upon focus change.
7. Theme adjustment is available at the top left next to the avatar. You can toggle between dark and light themes manually or let it adjust based on browser settings.
8. Clicking the user icon next to the avatar allows for user data and password editing.

## Features

- User Authentication: Easily log in with pre-filled credentials to access the application.
- Dynamic Dashboard: A comprehensive dashboard that displays key hotel data with an option to filter by specific date ranges.
- Booking Management: View, filter, and manage upcoming client reservations with detailed features like status sorting, alphabetical ordering, and more.
- Cabins Overview: Get a concise overview of hotel rooms, with the ability to add, edit, duplicate, or delete specific entries.
- User Creation: Add new users for shared access to the application, complete with email verification.
- Settings Customization: Modify hotel-specific details effortlessly with real-time auto-saving functionality.
- Theming: Easily toggle between light and dark mode or auto-adjust based on browser settings.
- User Profile Editing: Seamlessly update user data and passwords.

## Technologies & Libraries Used

- React & ReactDOM: The core of the application, enabling a dynamic user interface.
- Supabase: Used for the backend, ensuring real-time data synchronization and user authentication.
- React-Query & DevTools: Tools for fetching, caching, and updating asynchronous data in React.
- Styled-components: A popular library for styling React components with tagged template literals.
- React Router & React Router DOM: Ensures seamless routing and navigation within the application.
- Date-fns: Utility library for managing dates.
- React Hook Form: Efficient, extensible, and adaptable form management.
- React Hot Toast: Provides notification toasts for a smooth user experience.
- React-Icons: Incorporates icon sets for a visually appealing user interface.
- Recharts: Enables data visualization components built on D3.
- Vite: Serves as the build tool and development server.
- ESLint: Helps in code linting, ensuring code quality.
