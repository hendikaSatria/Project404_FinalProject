const express = require("express");
const router = express.Router();
const adminRouter = require("./admin");

const productRouter = require("./product");
const userRouter = require("./user");
const orderRouter = require("./order");

router.use("/admin", adminRouter);
router.use("/product", productRouter);
router.use("/user", userRouter);
router.use("/order", orderRouter);

module.exports = router;
