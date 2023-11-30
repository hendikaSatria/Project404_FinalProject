const express = require("express");
const router = express.Router();
const prisma = require("../prisma/generated/client");
const adminRouter = require("./admin/admin");

const productRouter = require("./product");
const userRouter = require("./admin/user");
const orderRouter = require("./admin/order");
const promotionRouter = require("./admin/promoRoutes");
const affiliateRouter = require("./admin/affiliateRoutes");

const shoppingCartRoutes = require('./user/shoppingCartRoutes');
const userAuthRoutes = require('./user/userAuthenticationRoutes'); 
const orderRoutes = require('./user/orderRoutes');
const proofOfPaymentRoutes = require('./user/proofOfPaymentRoutes');
const userProductRoutes = require('./user/productRoutes')


router.use((req, res, next) => {
    req.prisma = prisma;
    next();
});

router.use("/admin", adminRouter);
router.use("/product", productRouter);
router.use("/user", userRouter);
router.use("/order", orderRouter);
router.use("/promo", promotionRouter);
router.use("/affiliate", affiliateRouter);

router.use('/shoppingCart', shoppingCartRoutes);
router.use('/userauth', userAuthRoutes);  
router.use('/user/orders', orderRoutes);
router.use('/user', proofOfPaymentRoutes);
router.use('/users', userProductRoutes);

module.exports = router;
