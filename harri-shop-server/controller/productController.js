const Product = require("../models/Product")

// addAllProducts
module.exports.addProduct = async (req,res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send({
      message:'Product added successfully',
    })
  } catch (err) {
    res.status(500).send({
      message:err.message
    })
  }
}
// addAllProducts
module.exports.addAllProducts = async (req,res) => {
  try {
    await Product.deleteMany();
    const result = await Product.insertMany(req.body);
    res.send({
      message:'Products added successfully',
      result,
    })
  } catch (err) {
    res.status(500).send({
      message:err.message
    })
  }
}

// get all category
module.exports.getShowingProducts = async (req,res) => {
  try {
    const result = await Product.find({status:'active'});
    res.json({
      success:true,
      products:result,
    })
  } catch (error) {
    res.status(500).send({
      message:error.message
    })
  }
}

// getDiscountProduct
module.exports.getDiscountProduct = async (req,res) => {
  try {
    const discountProducts = await Product.find({ discount: { $gt: 0 } })
    res.json({
      success:true,
      products:discountProducts,
    })
  } catch (err) {
    res.status(500).send({
      message:err.message
    })
  }
}

// getDiscountProduct
module.exports.getSingleProduct = async (req,res) => {
  try {
    const product = await Product.findOne({_id:req.params.id})
    res.json(product)
  } catch (err) {
    res.status(500).send({
      message:err.message
    })
  }
}

// get related products
module.exports.getRelatedProducts = async (req,res) => {
  const {tags} = req.query;
  const queryTags = tags?.split(",")
  try {
    const product = await Product.find({tags:{$in:queryTags}}).limit(4);
    res.status(200).json({
      status:true,
      product,
    })
  } catch (err) {
    res.status(500).send({
      message:err.message
    })
  }
}