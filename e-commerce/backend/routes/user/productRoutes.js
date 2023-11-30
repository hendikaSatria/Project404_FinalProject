const express = require('express');
const router = express.Router();
const productController = require('../../controllers/user/userProduct');
const { getCategories } = require('../../controllers/user/userCategoryControllers');

router.get('/totalProducts', productController.getTotalProducts);
router.get('/products', productController.getProducts);
router.get('/allProducts', productController.getAllProducts); 
router.get('/products/:productId', productController.getProductById);
router.get('/categories', getCategories);

module.exports = router;
