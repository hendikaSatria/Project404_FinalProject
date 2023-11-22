const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const warehouseController = require("../controllers/warehouseController");
const categoryController = require("../controllers/categoryCotroller");

router.get("/", adminController.getAllAdmin);

router
  .route("/warehouse")
  .get(warehouseController.getAll)
  .post(warehouseController.addWarehouse);

router
  .route("/warehouse/:id")
  .get(warehouseController.getByID)
  .put(warehouseController.editWarehouse)
  .delete(warehouseController.deleteWarehouse);

router
  .route("/category")
  .get(categoryController.getAll)
  .post(categoryController.addCategory);

router
  .route("/category/:id")
  .get(categoryController.getByID)
  .put(categoryController.editCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;
