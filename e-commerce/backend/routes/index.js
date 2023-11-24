const express = require("express");
const router = express.Router();
<<<<<<< Updated upstream
// const homeController = require("../controllers/homeController");
=======
>>>>>>> Stashed changes
const adminRouter = require("./admin");
const productRouter = require("./product");
const userRouter = require("./user");
const orderRouter = require("./order");



<<<<<<< Updated upstream
router.use("/", userRouter);
=======
>>>>>>> Stashed changes
router.use("/admin", adminRouter);
router.use("/product", productRouter);
router.use("/user", userRouter);
router.use("/order", orderRouter);

module.exports = router;
