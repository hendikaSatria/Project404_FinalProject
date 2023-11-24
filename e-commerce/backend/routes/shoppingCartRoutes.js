const express = require('express');
const router = express.Router();
const cartController = require('../controllers/shoppingCartController');

// Add a product to the shopping cart
router.post('/add-to-cart', async (req, res) => {
    console.log('Received POST request to /add-to-cart');
    const { userId, productId } = req.body;

  try {
    const cartItem = await cartController.addToCart(userId, productId);
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

// Get the user shopping cart
router.get('/get-shopping-cart/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId, 10);

  try {
    const shoppingCart = await cartController.getShoppingCart(userId);
    res.json(shoppingCart);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

// Remove a product from the shopping cart
router.delete('/remove-from-cart/:cartItemId/:userId/:productId', async (req, res) => {
  const { cartItemId, userId, productId } = req.params;

  try {
    const removedCartItem = await cartController.removeFromCart(cartItemId, userId, productId);
    res.json({ message: 'Product removed from the shopping cart', removedCartItem });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

// Route to update the quantity of a product in the shopping cart
router.put('/updateCartItemQuantity/:cartItemId/:newQuantity/:userId', async (req, res) => {
  const { cartItemId, newQuantity, userId } = req.params;
  try {
    const result = await cartController.updateCartItemQuantity(cartItemId, parseInt(newQuantity, 10), userId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
