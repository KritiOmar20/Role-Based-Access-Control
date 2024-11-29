import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
import PrivateRoute from './utils/PrivateRoute';
import './styles.css';

// Define the admin and user pages
// const AdminPage = () => <h1>Admin Page - Access restricted to Admins</h1>;
// const UserPage = () => <h1>User Page - Accessible by Users and Admins</h1>;
const UnauthorizedPage = () => <h1>403 - Unauthorized Access</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        {/* Protected Routes */}
        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRoles={['Admin']}>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute allowedRoles={['User', 'Admin']}>
              <UserPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
