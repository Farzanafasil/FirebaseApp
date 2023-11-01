const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

// Protected route example
router.get('/protected', authenticateUser, userController.checkAuthorization, (req, res) => {
  res.status(200).json({ message: 'Access granted to protected route' });
});

module.exports = router;