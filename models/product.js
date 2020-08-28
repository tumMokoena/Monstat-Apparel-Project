const productSchema = new productSchema({
  tittle: {
    type: String,
    required: [true, 'Please enter product title'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter product price'],
  },
  category: {
    type: String,
    required: [true, 'Please enter a valid category'],
    enum: ['Hoddy', 'Round-neck', 'T-shirt', 'Track-pant', 'Hat', 'Cap'],
  },
  coverImageUrl: {
    type: String,
    required: [true, 'Please provide a valid image'],
  },
  featuredImagesUrl: {
    type: [String],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  size: {
    type: [String],
    required: [true, 'Please enter product sizes'],
    enum: ['Small', 'Medium', 'Large', 'X-large', 'XX-large'],
  },
  colors: {
    type: [String],
    required: [true, 'Please enter product sizes'],
    enum: ['Black', 'Blue', 'Orange', 'Maroon', 'White', 'Pink', 'Other'],
  },
});

module.exports = productSchema;
