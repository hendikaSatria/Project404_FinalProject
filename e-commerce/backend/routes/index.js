const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const adminRouter = require("./admin");
const productRouter = require("./product");




router.get("/", homeController.home);
router.use("/admin", adminRouter);
router.use("/product", productRouter);

module.exports = router;
