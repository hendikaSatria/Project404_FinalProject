const express = require('express');
const router = express.Router();
const promoController = require('../controllers/promoController');

router.get('/', promoController.getAllPromo)
router.get('/:promo_id', promoController.getPromoById)
router.post('/create', promoController.createPromo)
router.put('/:promo_id', promoController.updatePromo);
router.delete('/:promo_id', promoController.deletePromo)

module.exports = router;
