const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userAuthenticationController');

// Endpoint for user registration
router.post('/register', registerUser);

// Endpoint for user login
router.post('/login', loginUser);

module.exports = router;
