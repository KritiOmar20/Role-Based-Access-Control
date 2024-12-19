# **Role-Based Access Control (RBAC) System**

This project is a **Role-Based Access Control (RBAC) System** implemented using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It features secure user authentication, authorization, and role-based access management for roles such as `Admin`, `User`, and `Moderator`.

---

## **Features**

1. **User Authentication:**
   - Secure user login using JWT tokens.
   - Passwords are hashed using bcrypt.js for security.

2. **Role-Based Authorization:**
   - `Admin`: Full access to all endpoints.
   - `Moderator`: Limited access to user-related data.
   - `User`: Restricted to personal and general user data.

3. **Frontend Integration:**
   - React-based frontend dynamically adjusts UI based on the user's role.
   - Login and registration forms connected to backend APIs.

4. **Secure API Design:**
   - Routes are protected using authentication and authorization middleware.
   - Sensitive data managed via environment variables.

---

## **Technologies Used**

### **Frontend**
- React.js
- Axios
- React Router
- CSS for styling

### **Backend**
- Node.js and Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt.js for password hashing
- dotenv for environment variable management

---

## **Project Setup**

### **1. Prerequisites**
- Node.js and npm
- MongoDB (or MongoDB Atlas)
- Git

### **2. Installation Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/KritiOmar20/Role-Based-Access-Control.git
   cd Role-Based-Access-Control
   
2. Install backend dependencies:
   ```bash
   cd backend
   npm install express bcryptjs jsonwebtoken mongoose dotenv cors body-parser
   npm install --save-dev nodemon

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install axios react-router-dom

### **3. Installation Steps****
1. Backend (backend/.env)
   ```bash
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>
   JWT_SECRET=your-secret-key
   PORT=5000

2. frontend (frontend/.env)
   ```bash
   REACT_APP_API_URL=http://localhost:5000

### **4. Start the servers**
1. Backend 
   ```bash
   cd backend
   npm run server.js

2. frontend 
   ```bash
   cd frontend
   npm start

### **5.Open the application at http://localhost:3000**

### **Folder Structure**
```bash
Role-Based-Access-Control/
│
├── /backend
│   ├── /controllers       # API controllers for handling requests
│   ├── /models            # Mongoose schemas and models
│   ├── /middleware        # Authentication and authorization middleware
│   ├── /routes            # API route definitions
│   ├── server.js          # Main backend server file
│   └── .env               # Backend environment variables
│
├── /frontend
│   ├── /src               # React source files
│   ├── /components        # Reusable React components
│   ├── /pages             # UI pages (AdminPage, UserPage, etc.)
│   ├── App.js             # Main React application entry point
│   └── .env               # Frontend environment variables
│
└── .gitignore             # Files to ignore in Git
```

### **Key Highlights
1.Authentication Security:
- Passwords hashed with bcrypt.js.
- JWT tokens used for secure user sessions.

2.Role-Based Authorization:
- Middleware ensures restricted access to routes based on user roles.

3.Scalable Design:
- Modular backend structure with controllers, routes, and middleware.
- Role-based frontend rendering.
