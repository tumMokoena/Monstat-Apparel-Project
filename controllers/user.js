//@desc     show featured products in index page
//@route    get  /shop/v1/
//@access   public
exports.index = (req, res, next) => {
  res.render('index');
};

//@desc     show app products in the selected category
//@route    get  /shop/v1/category/:id
//@access   public
exports.products = (req, res, next) => {
  res.render('products');
};

//@desc     show full details of selected product
//@route    get  /shop/v1/products/:id
//@access   public
exports.item = (req, res, next) => {
  res.render('item');
};

//@desc     show all items inside cart
//@route    get  /shop/v1/card
//@access   public
exports.cart = (req, res, next) => {
  res.render('cart');
};
