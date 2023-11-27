const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const adminRouter = require("./admin");
const promotionRouter = require("./promotion");
const affiliateRouter = require("./affiliate");

router.get("/", homeController.home);
router.use("/admin", adminRouter);
router.use("/promo", promotionRouter);
router.use("/affiliate", affiliateRouter);

module.exports = router;
