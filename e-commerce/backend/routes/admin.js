const express = require('express');
const {
    loginController,
    registerController,
    logoutController,
  } = require('../controllers/admin/adminController');
const router = express.Router();

router.post('/login', loginController);
router.post('/register', registerController);
router.post('/logout', logoutController);

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
