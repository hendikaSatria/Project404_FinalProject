const express = require('express');
const {
    loginController,
    registerController,
    logoutController,
  } = require('../controllers/admin/adminController');
const router = express.Router();
// const adminController = require("../controllers/adminController");
// router.get("/", adminController.getAllAdmin);



router.post('/login', loginController);
router.post('/register', registerController);
router.post('/logout', logoutController);

module.exports = router;
