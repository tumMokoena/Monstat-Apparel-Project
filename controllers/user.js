const app = require('../server');
const express = require('express');

//@desc     show featured products in index page
//@route    get  /shop/v1/
//@access   public
exports.index = (req, res, next) => {
  res.render('index');
};
