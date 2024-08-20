# SwiftShop User Panel

This project is the user-facing panel of the SwiftShop e-commerce website. It allows customers to browse products, manage their shopping cart, and process payments.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Home Page**:
  - Displays a featured product and new arrivals.
![featured product - front](https://github.com/user-attachments/assets/89c5ec10-a4a7-4c3a-858a-6c1ce345af25)

    
- **All Products Page**:
  - Shows all products listed by the admin.
![all products - front](https://github.com/user-attachments/assets/5479314d-20a0-436e-87f5-5b9092e97e94)

    
  - Clicking on a product shows its detailed page with images, description, price, and an option to add it to the cart.
    ![single product - front](https://github.com/user-attachments/assets/a2788fb0-a610-4348-8f9f-9b36b98b5f24)

- **Cart Page**:
  - Displays all products added to the cart.
  - Allows users to increase or decrease product quantities directly from the cart.
  - Shows billing information.
  - Users can enter their billing address and proceed to payment.
    ![cart - front](https://github.com/user-attachments/assets/cfbf76d3-6db2-4d6e-bad7-fc67c2b341bb)

- **Payment**:
  - Payment processing using Stripe.
    
![Stripe checkout - front](https://github.com/user-attachments/assets/e62b1ce2-f488-4f5c-9338-6b5b732f074a)

## Technologies Used

- **Next.js**: React framework for server-rendered applications.
- **Styled-Components**: CSS-in-JS library for styling components.
- **Stripe**: Payment processing platform for validating payments.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nikkittaa/ecommerce-front.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ecommerce-front
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to `http://localhost:3000` to access the user panel.
