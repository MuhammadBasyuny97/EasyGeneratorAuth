## Description

# EasyGeneratorAuth Backend

## Overview

This backend service handles authentication and book management for EasyGeneratorAuth. It provides RESTful APIs for user signup, signin, logout, and CRUD operations on books.

## Features

- User authentication: signup, logind, logout
- Book management: create, read, update, and delete books
- JWT-based authentication and authorization
- Password hashing with bcrypt
- Environment configuration with dotenv

## API Endpoints

<h1>Authentication<h1/>

| Method | Endpoint       | Description             |
| ------ | -------------- | ----------------------- |
| POST   | `/auth/signup` | Register a new user     |
| POST   | `/auth/signin` | Login a user            |
| POST   | `/auth/logout` | Logout the current user |

<h1>Book CRUD <h1/>

| Method | Endpoint     | Description                            |
| ------ | ------------ | -------------------------------------- |
| GET    | `/books/`    | Retrieve all books                     |
| POST   | `/books/`    | Create a new book                      |
| POST   | `/books/:id` | (Optional) Custom action on book by id |
| PUT    | `/books/:id` | Update book details by id              |
| DELETE | `/books/:id` | Delete book by id                      |

Use API Client Postman Collection Provided to test it.

Technologies Used
NestJS - A progressive Node.js framework for building efficient, reliable, and scalable server-side applications

TypeScript - Typed superset of JavaScript for safer code

MongoDB - NoSQL document database

Mongoose - Elegant MongoDB object modeling for Node.js

JSON Web Tokens (JWT) for authentication

bcrypt for password security

dotenv for environment variable management

## Installation

1. Clone the repository and navigate to the backend folder:
   ```bash
   git clone https://github.com/MuhammadBasyuny97/EasyGeneratorAuth.git
   cd EasyGeneratorAuth/backend
   ```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
