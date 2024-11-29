
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { authenticate, authorize } = require('../middleware/authMiddleware');

// Route for fetching all users (accessible to admin and moderator)
router.get('/users', authenticate, authorize(['admin', 'moderator']), async (req, res) => {
  try {
    const users = await User.find({}, 'username role'); // Fetch username and role only
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// Admin-only route to fetch all users (admin exclusive)
router.get('/admin/users', authenticate, authorize(['admin']), async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

module.exports = router;

