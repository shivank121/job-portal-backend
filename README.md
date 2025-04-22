# 🔐 Job Portal Backend – Node.js + TypeScript + MongoDB

This is a backend server for a **Job Portal** application. It's built using **Node.js**, **Express**, **TypeScript**, and **MongoDB**. The project supports:

- User registration and login
- JWT-based authentication
- Protected routes
- Validation using Zod
- Clean code structure using MVC and services

---

## 📁 Folder Structure

src/ ├── config/ # Database connection logic │ └── connectDB.ts ├── const/ # App-wide constants like MONGO_URI │ └── db.ts ├── controllers/ # Handles incoming requests and sends responses │ └── auth.controller.ts ├── middlewares/ # Middlewares for auth and validation │ ├── auth.middleware.ts │ └── validateRequest.ts ├── models/ # Mongoose schemas for MongoDB │ └── user.model.ts ├── routes/ # API route handlers │ ├── auth.routes.ts │ └── index.ts ├── services/ # Business logic for each feature │ └── auth.service.ts ├── types/ # Custom TypeScript types and interfaces │ └── index.d.ts ├── utils/ # Helper functions (password, token, response) │ ├── apiResponse.ts │ ├── comparePassword.ts │ ├── hashPassword.ts │ └── generateToken.ts ├── app.ts # Express app setup └── index.ts # Entry point that starts the server


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

### 1. Clone the repository

```bash
git clone https://github.com/your-username/job-portal-backend.git
cd job-portal-backend

npm install


### 2. Setup the dotenv (.env)
PORT=5000
MONGO_URI=mongodb://localhost:27017/jobportal
JWT_SECRET=your_jwt_secret

### 
npm run dev




