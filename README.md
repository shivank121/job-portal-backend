# 🔐 Job Portal Backend – Node.js + TypeScript + MongoDB

This is a backend server for a **Job Portal** application. It's built using **Node.js**, **Express**, **TypeScript**, and **MongoDB**. The project supports:

- User registration and login
- JWT-based authentication
- Protected routes
- Validation using Zod
- Clean code structure using MVC and services

---

# Project Folder Structure

This is the folder structure of the backend application, which follows the **MERN stack** (MongoDB, Express, React, Node.js) architecture.

## `src/` - Source Code
All the source code resides inside this folder.

### `config/`
Contains configuration files like database connection logic.
- **`connectDB.ts`** - Establishes the connection to MongoDB.

### `const/`
Contains app-wide constants and environment variables.
- **`db.ts`** - Exports environment variables such as `MONGO_URI`.

### `controllers/`
Contains the logic to handle incoming HTTP requests and send responses.
- **`auth.controller.ts`** - Handles authentication-related requests like login and registration.

### `middlewares/`
Contains reusable middleware functions that are used in the Express app.
- **`auth.middleware.ts`** - Middleware to verify if the user is authenticated.
- **`validateRequest.ts`** - Middleware to validate incoming requests using Zod or Joi.

### `models/`
Contains Mongoose schemas for MongoDB collections.
- **`user.model.ts`** - Defines the schema for the `User` collection.

### `routes/`
Contains API route handlers.
- **`auth.routes.ts`** - Defines routes for authentication-related operations.
- **`index.ts`** - Combines all routes into a single router for use in the Express app.

### `services/`
Contains business logic related to each feature or module of the application.
- **`auth.service.ts`** - Contains the logic for user authentication, registration, etc.

### `types/`
Contains custom TypeScript types and interfaces used throughout the application.
- **`index.d.ts`** - Defines global interfaces and types.

### `utils/`
Contains helper functions that are used throughout the application.
- **`apiResponse.ts`** - Standardizes the format of API responses.
- **`comparePassword.ts`** - Compares hashed password with plain text.
- **`hashPassword.ts`** - Hashes plain text passwords.
- **`generateToken.ts`** - Generates JWT tokens for user authentication.

### `app.ts`
Sets up the Express app, middleware, routes, and other configurations.

### `index.ts`
The entry point of the application that connects the database and starts the server.

---

This structure is designed to keep the code modular, clean, and scalable. Each feature of the app is placed in its own folder to maintain a clear separation of concerns.



## 📦 Technologies & Libraries

### 🧩 Core Libraries

| Library       | Why We Use It (Easy Explanation)                                      |
|---------------|------------------------------------------------------------------------|
| **express**   | Helps create APIs using HTTP methods (GET, POST, etc.)                |
| **mongoose**  | Makes working with MongoDB easier with schemas and models             |
| **dotenv**    | Lets you use environment variables from a `.env` file                 |
| **cookie-parser** | Lets you access cookies from requests                           |
| **cors**      | Allows frontend (like React) to talk to backend on a different port   |
| **bcrypt**    | Used to hash passwords before saving into the database                |
| **jsonwebtoken** | Generates and verifies secure JWT tokens                        |
| **zod**       | Used to validate user input (form data, etc.)                         |

### 🛠 Development Libraries

| Library                | Why We Use It                                                  |
|------------------------|----------------------------------------------------------------|
| **typescript**         | Adds type safety to JavaScript                                 |
| **ts-node-dev**        | Auto-restarts server on changes (dev mode)                     |
| **prettier**           | Auto-formats code to make it neat and consistent               |
| **eslint-config-prettier** | Helps Prettier and ESLint work together                 |
| **@types/\***          | TypeScript support for 3rd-party libraries like Express, JWT   |



---

## 📦 Technologies & Libraries

### 🧩 Core Libraries

| Library       | Why We Use It (Easy Explanation)                                      |
|---------------|------------------------------------------------------------------------|
| **express**   | Helps create APIs using HTTP methods (GET, POST, etc.)                |
| **mongoose**  | Makes working with MongoDB easier with schemas and models             |
| **dotenv**    | Lets you use environment variables from a `.env` file                 |
| **cookie-parser** | Lets you access cookies from requests                           |
| **cors**      | Allows frontend (like React) to talk to backend on a different port   |
| **bcrypt**    | Used to hash passwords before saving into the database                |
| **jsonwebtoken** | Generates and verifies secure JWT tokens                        |
| **zod**       | Used to validate user input (form data, etc.)                         |

### 🛠 Development Libraries

| Library                | Why We Use It                                                  |
|------------------------|----------------------------------------------------------------|
| **typescript**         | Adds type safety to JavaScript                                 |
| **ts-node-dev**        | Auto-restarts server on changes (dev mode)                     |
| **prettier**           | Auto-formats code to make it neat and consistent               |
| **eslint-config-prettier** | Helps Prettier and ESLint work together                 |
| **@types/\***          | TypeScript support for 3rd-party libraries like Express, JWT   |

---

## 🔧 How to Setup the Project

`## Setup Instructions

### 1. Clone the Repository

1. Clone the project from GitHub:

```bash
git clone https://github.com/shivank121/job-portal-backend.git
cd job-portal-backend

npm install
```

### 2. Configure Environment Variables

To configure the environment variables, create a `.env` file in the root directory of the project and add the following configuration:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/jobportal
JWT_SECRET=your_jwt_secret

```

```bash
npm run dev
```




