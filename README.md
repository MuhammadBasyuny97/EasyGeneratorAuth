<h1 align="center">🚀 EasyGenerator</h1>

---

## ✨ Features

- ✅ **Form Validation** using **React Hook Form** & **Zod**
- 🔐 **Signup / Login / Logout** with **JWT**
- 🛡️ **Protected Routes**
- 📝 **CRUD Functionality**

---

## 🧩 Frontend Stack

- ⚛️ **ReactJS**
- ⚡ **Vite**
- 🌐 **React Router**
- 🧠 **TypeScript**
- 🎨 **Tailwind CSS**
- 📦 **Zustand**
- 🧾 **React Hook Form**
- 🧪 **Zod**
- 🔔 **React Hot Toast**
- 📡 **Axios**

---

## 🛠️ Backend Stack

- 🏗️ **NestJS**
- 🧠 **TypeScript**
- 🌐 **RESTful API**
- 🔐 **JWT / Passport / Bcrypt**
- 🔁 **CORS**
- 🛡️ **Helmet**
- 🧬 **MongoDB + Mongoose ODM**
- 🧾 **Robust Authentication**
- 🔐 **Access Token Handling**
- 👥 **User Signup & Login**
- 🧯 **Security Best Practices**

---

## 🧪 Testing

- 🧪 **Jest**
- ⚙️ **End-to-End (E2E) Testing**

---

### 🔐 Security Measures

- Helmet middleware enabled
- CORS configured
- Environment variables for secrets
- Passwords hashed using bcrypt

## ⚙️ Setup `.env` File

Create a `.env` file in the root of the `backend` directory and add:

````env
MONGO_URI=your_mongo_uri
PORT=your_chosen_port
JWT_SECRET=your_secret_key
JWT_EXPIRES=your_session_expiry
CLIENT_URL=http://localhost:5173
NODE_ENV=development

### Setup using my.env file

```bash

Feel Free to use my .env file

DB_URI=mongodb+srv://muhammadbasyunydev:0552594782@node-js.wlik9nq.mongodb.net/easygenerator?retryWrites=true&w=majority&appName=node-js
JWT_SECRET=a2ddc5bafd394acdc260f2ee2e60f380a328f067bc406756e7aad4cf9d39ba9a
JWT_EXPIRES=3d
PORT = 3000
NODE_ENV=development





### Run this app locally

## How to Run

### Backend
```bash
cd backend
npm install
npm audit fix --force
npm run start:dev

## How to Run

### Frontend
```bash
cd frontend
npm install
npm run dev
````
