const Product = require('../models/product');

//@desc     creates a new product [form]
//@route    get  /admin/v1/product
//@access   private [Admin only]
exports.create = async (req,res,next) => {
  res.render('createProduct');
}

//@desc     creates a new product and saves it in database
//@route    post  /admin/v1/product
//@access   private [Admin only]
exports.createProduct = async (req, res, next) => {
  try {

    console.log(req.files.coverImageUrl)

    let reqBody = {...req.body};
    let colors = [];
    let sizes = [];
    let errors = [];

    // check which colors are checked and insert them into array
    if(reqBody.black){
      colors.push('Black');
    } 
     if(reqBody.blue){
      colors.push('Blue');
    } 
     if(reqBody.orange){
      colors.push('Orange');
    } 
     if(reqBody.white){
      colors.push('White');
    } 
     if(reqBody.maroon){
      colors.push('Maroon');
    } 
     if(reqBody.pink){
      colors.push('Pink');
    } 
     if(reqBody.other){
      colors.push('Other');
    } 

    //check which colors are selected to be availablle
     if(reqBody.small){
      sizes.push('Small');
    } 
    if(reqBody.medium){
      sizes.push('Medium');
    } 
    if(reqBody.large){
      sizes.push('Large');
    } 
    if(reqBody.xlarge){
      sizes.push('X-large');
    } 
    if(reqBody.xxlarge){
      sizes.push('XX-large');
    } 

    const picked = (({ tittle, price, category, coverImageUrl, featuredImagesUrl }) => ({ tittle, price, category, coverImageUrl, featuredImagesUrl }))(reqBody);
    
    //append sizes and colors arrays to picked object
    picked.colors = colors;
    picked.size = sizes;
    
    //handle image uploads -  handle product cover image 
    if(!picked.coverImageUrl) {

      errors.push('Please upload product cover image');

    } else{

     // console.log(req.files.coverImageUrl);
    }



    // const newProduct = await Product.create(req.body);
    res.send('ok');

  } catch (err) {
    console.log(err)
  }

  //@desc     edits a product already on database
  //@route    put /admin/v1/product
  //@access   private [Admin only]
};
