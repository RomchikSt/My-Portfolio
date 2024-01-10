# Menu-Order

[![StandWithUkraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://github.com/vshymanskyy/StandWithUkraine/blob/main/docs/README.md)

## Description

Fast React Pizza is a web application designed for convenient and hassle-free pizzeria menu browsing and ordering.

![Screenshot 2024-01-10 at 22 45 46](https://github.com/RomchikSt/Portfolio/assets/140477189/b160d45e-4df0-43fe-bf70-2639a1cc7a34)



## Live Demo

Experience the simplicity of ordering your favorite pizza! Visit the [live demo](https://rstp-menu.netlify.app/)

## Install and Run the Project

1. Clone or download the repository.
2. Navigate to the project directory.
3. Install the required packages: `npm install`.
4. Run the project: `npm run dev`.

## How to Use

1. First Step: Upon launch, enter your name in the provided field and click 'START ORDERING' or press 'Enter'.
2. Menu Browsing: View the array of pizzas available for order.
3. Adding to Cart: Use the 'ADD TO CART' button to include pizzas in your order. Once a pizza is added, this button changes to '+' and '-' buttons, allowing you to adjust the quantity. The 'delete' option also appears for any modifications.
4. View Cart: As soon as a pizza is added, a bar appears at the bottom displaying the total pizzas, total cost, and an 'OPEN CART →' button to view detailed cart items.
5. Managing Cart: Within the cart, you can clear all items using 'CLEAR CART', adjust quantities, or remove specific pizzas.
6. Placing the Order: Click 'ORDER PIZZAS', then provide your name, phone number, and address. The 'GET POSITION' button can assist with address input. Opting for a priority order (by checking the provided box) incurs an additional fee.
7. Order Confirmation: After ordering, you'll receive a confirmation with the estimated preparation time.
8. Order Tracking: Use the input in the header to always check the status of your order.

## Features

- **Dynamic Cart Management:** Easily add, adjust quantities, or remove items from the cart.
- **Priority Orders:** Opt for a quicker delivery with a priority order option.
- **Location Assistance:** The 'GET POSITION' button fetches the user's current address for convenience.

## Technologies & Libraries Used

- React & ReactDOM
- Redux & React-Redux
- React Router DOM
- TailwindCSS for styling
- Vite as a build tool and development server
- ESLint for code linting
