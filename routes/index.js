const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const adminRouter = require("./admin");
const promotionRouter = require("./promotion");

router.get("/", homeController.home);
router.use("/admin", adminRouter);
router.use("/promo", promotionRouter);

module.exports = router;
