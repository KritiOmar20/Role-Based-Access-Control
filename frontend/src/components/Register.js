import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // To handle redirect after successful registration

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '', role: 'User' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Initialize React Router's useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(''); 

    try {
      await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/auth/register`, formData);
      setMessage('Registration successful');
      
      // Redirect to login page after successful registration
      navigate('/login'); // Redirect to the login page
      // Optionally, you can reset the form after successful registration
      setFormData({ username: '', password: '', role: 'User' });
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      setMessage('Registration failed: ' + (error.response ? error.response.data.error : 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="User">User</option> {/* Fixed extra space in "User" */}
          <option value="Admin">Admin</option>
          <option value="Moderator">Moderator</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {message && <p>{message}</p>} {/* Display feedback message */}
    </div>
  );
};

export default Register;
