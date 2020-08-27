const express = require('express');
const { index, item, products, cart } = require('../controllers/user');

const router = express.Router();

router.route('/').get(index);
router.route('/products/:id').get(item);
router.route('/category/:id').get(products);
router.route('/cart').get(cart);

module.exports = router;
