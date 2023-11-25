const express  = require('express');
const router = express.Router();
const { registerUser, loginUser, addAddress } = require('../controllers/userAuthenticationController');
const authenticateToken = require('./addAddressRoutes');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/addAddress', authenticateToken, addAddress);

module.exports = router;