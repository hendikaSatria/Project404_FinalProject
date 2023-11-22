const express = require("express");
const router = express.Router();
const productController = require("../controllers/admin/productController");

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getByID);

module.exports = router;
