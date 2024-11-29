const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/admin', authenticate, authorize(['Admin']), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

router.get('/user', authenticate, authorize(['User', 'Admin']), (req, res) => {
  res.json({ message: 'Welcome User!' });
});

module.exports = router;
