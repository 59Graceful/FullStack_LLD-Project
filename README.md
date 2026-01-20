BookMyShow Clone – Capstone Project

Full Stack Specialization (MERN Stack)

1. Introduction

This repository contains the complete source code for the BookMyShow Clone, a full-stack web application developed as part of the Scaler Neovarsity Capstone Project under the Full Stack Specialization program.

The objective of this project is to design and implement a scalable web-based movie ticket booking system that reflects real-world application workflows while applying core software engineering principles, low-level system design concepts, and modern web technologies.

2. Project Overview

The BookMyShow Clone is a role-based ticket booking platform that enables users to:

Browse movies and theatres

View available shows

Select seats interactively

Complete payments through an integrated payment gateway

View booking history

In addition to regular users, the system supports theatre owners for show management and an administrator role for platform moderation.

The application is built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and follows a client–server architecture.

3. System Roles

The application supports the following user roles:

3.1 Registered User

Login and authentication using JWT

Browse movies and theatres

Select seats and book tickets

Complete payments via Stripe Checkout (test mode)

View booking history

3.2 Theatre Owner

Add and manage theatres

Create and schedule shows

Configure pricing and seat capacity

3.3 Administrator

Approve or block theatres

Monitor platform data

Ensure system integrity

4. Technology Stack

Frontend

React.js|

Redux Toolkit

Ant Design

Axios

React Router DOM

Backend

Node.js

Express.js

MongoDB with Mongoose

JWT Authentication

bcrypt for password hashing

Payment Integration

Stripe Checkout (Test Mode)

Database

MongoDB Atlas (Cloud Database)

5. Core Functionalities

User authentication and authorization

Role-based access control

Movie and theatre management

Show scheduling

Seat selection interface

Online payment integration

Booking persistence

Profile-based booking history

6. Security Implementation

Passwords are hashed using bcrypt before storage

JWT tokens secure protected backend APIs

Role-based authorization restricts sensitive operations

Payment details are handled entirely by Stripe and are never stored in the application database

Backend validations prevent invalid booking operations

7. Payment Workflow

The application integrates Stripe Checkout for secure online payments.

Users are redirected to a Stripe-hosted checkout page

Payments are processed in test mode

Upon successful payment, booking data is saved in the database

Seat availability is updated server-side

No real monetary transactions occur.

8. Project Structure
BookMyShowClone/
│
├── client/               # Frontend React application
│   ├── src/
│   └── public/
│
├── server/               # Backend Node.js application
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
└── README.md

9. Deployment

The application was deployed using cloud-based services for academic demonstration:

Backend APIs deployed using Render

Frontend deployed as a static web application

MongoDB Atlas used as cloud database

Environment variables configured securely via deployment dashboards

10. Limitations

Payments run only in Stripe test mode

Refunds are not implemented

Webhook-based payment verification is not included

Real-time seat locking using WebSockets is not implemented

No mobile application support

These limitations were defined due to academic scope and time constraints.

11. Future Enhancements

Real-time seat updates using WebSockets

Webhook-based payment verification

Refund and cancellation workflows

Email notifications

Mobile application development

Advanced concurrency handling

12. Academic Declaration

This project was developed solely for educational purposes as part of the Scaler Neovarsity academic curriculum.
No commercial usage is intended.
