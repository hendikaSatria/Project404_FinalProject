const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const adminRouter = require("./admin");

router.get("/", homeController.home);
router.use("/admin", adminRouter);

module.exports = router;
