const express = require('express');
const { createProduct , create } = require('../controllers/admin');

const router = express.Router();

router.route('/product').post(createProduct);
router.route('/product').get(create);

module.exports = router;
