# Banking System Project

A full-stack Banking System that provides essential banking services, including account creation, balance inquiry, fund transfer, deposit, and PIN management. This project is built with modern web technologies like **React**, **TypeScript**, **Tailwind CSS**, **Node.js**, **Express.js**, and more.

## Features

1. **Create Account**  
   Users can sign up for a new bank account with secure validation.

2. **See Balance**  
   Customers can view their current account balance securely.

3. **Transfer Amount**  
   Transfer funds to other accounts with real-time transaction updates.

4. **Deposit Amount**  
   Deposit money directly into the account.

5. **Change PIN**  
   Update account PIN with secure validation and encryption.

6. **Email Notifications**  
   Send account information securely to users via email using **EmailJS**.

## Technologies Used

- **Frontend**: 
  - React
  - TypeScript
  - Tailwind CSS
  
- **Backend**: 
  - Node.js
  - Express.js

- **Authentication & Security**:
  - JWT (JSON Web Token) for secure authentication.
  - bcrypt for PIN encryption.

- **Email Notifications**:
  - EmailJS for sending account-related emails directly from the frontend.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.
- **Database**: A database (e.g., MongoDB or PostgreSQL) configured for account and transaction data.
- **Environment Variables**: Set up the following variables in a `.env` file:
  - `JWT_SECRET` for token signing.
  - `DB_URI` for database connection.

### EmailJS Setup
- Create an EmailJS account at [EmailJS](https://www.emailjs.com/).
- Set up an email service, create an email template, and get the service ID, template ID, and user ID.
- Add the EmailJS configuration in the frontend.

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/banking-system.git
