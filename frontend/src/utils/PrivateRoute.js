
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" />;

  try {
    const user = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
    if (allowedRoles.includes(user.role)) {
      return children;
    } else {
      return <Navigate to="/unauthorized" />;
    }
  } catch (err) {
    console.error('Invalid or expired token:', err);
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
