const express = require('express');
const router = express.Router();
const userAuthenticationController = require('../controllers/userAuthenticationController');
const validationMiddleware = require('../middleware/validationMiddleWare');
const authMiddleware = require('../middleware/authMiddleWare');

// Destructure functions from the imported modules
const {
  registerUser,
  loginUser,
  logoutUser,
  updateAddress,
  viewProfile,
} = userAuthenticationController;

const {
  registrationValidationRules,
  loginValidationRules,
  validate,
} = validationMiddleware;

const { authenticateToken } = authMiddleware;
console.log("AAA", authenticateToken);

// Endpoint for user registration
router.post('/register', registrationValidationRules, validate, registerUser);

// Endpoint for user login
router.post('/login', loginValidationRules, validate, loginUser);

// Endpoint for user logout, requires authentication
router.post('/logout', authenticateToken, logoutUser);

// Update address after login, requires authentication
router.put('/update-address', authenticateToken, updateAddress);

// View profile, requires authentication
router.get('/view-profile', authenticateToken, viewProfile);

module.exports = router;
