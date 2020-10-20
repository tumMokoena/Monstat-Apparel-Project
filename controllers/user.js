const Product = require('../models/product');

//@desc     show featured products in index page
//@route    get  /shop/v1/
//@access   public
exports.index = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.render('index', { products });
  } catch (err) {
    next(err);
    };
};

//@desc     show app products in the selected category
//@route    get  /shop/v1/products?category=examplecategory
//@access   public
exports.products = async (req, res, next) => {
  try { 
    // add a money sign in filter query for mono to undestand
    let query;

    //create a req.query copy 
    const reqQuery = {...req.query};

    //create a query string
    let queryStr = JSON.stringify(reqQuery);

    //create operators ($gt,$gte etcs)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

    //finding resource 
    query = Product.find(JSON.parse(queryStr));

    //get products from database that match specified query
    const products = await query;

    res.render('products', {products} );

  } catch (err) {

    console.log(err);

  }
  
};

//@desc     show full details of selected product
//@route    get  /shop/v1/products/:id
//@access   public
exports.item = async (req, res, next) => {
  try {
    const products = await Product.findById(req.params.id);
    const data = res.render('item',{products})
  } catch (err) {
    console.log(err);
    };
};

//@desc     show all items inside cart
//@route    get  /shop/v1/cart
//@access   public
exports.cart = (req, res, next) => {
  res.render('cart');
};
