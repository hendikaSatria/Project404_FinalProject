const express = require("express");
const router = express.Router();
const productController = require("../controllers/admin/productController");
const authMiddleware = require('../middleware/authMiddleware');
const mtr = require("../middleware/upload");

// router.get("/", productController.getAllProduct);
// router.get("/:id", productController.getByID);
// router.post('/', mtr.upload.single('image'), productController.createProduct);
// router.put('/:id', productController.updateProduct);
// router.delete('/:id', productController.deleteProduct);

router.get("/", authMiddleware, productController.getAllProduct);
router.get("/:id", authMiddleware, productController.getByID);
router.post('/', authMiddleware, mtr.upload.single('image'), productController.createProduct);
router.put('/:id', authMiddleware, productController.updateProduct);
router.delete('/:id', authMiddleware, productController.deleteProduct);
router.get("/category/:category_id", authMiddleware, productController.getByCategory);

module.exports = router;
