const Product = require("../model/Product");

const getProducts = async (req, res, next) => {
  try {
    let product = await Product.find();
    res.status(200).json({ product });
  } catch (err) {
    return res.status(404).json({ message: "No Products" });
    console.log(err.message);
  }
};

const createProducts = async (req, res, next) => {
  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    imgURL: req.body.imgURL,
    quantity: req.body.quantity,
    isFeatured: req.body.isFeatured,
  });
  try {
    product = await product.save();
    res.status(201).json({ product });
  } catch (err) {
    return res.status(500).json({ message: "Cannot add product" });
    console.log(err.message);
  }
};

const getProduct = async (req, res, next) => {
  const productId = req.params.id;
  try {
    let product = await Product.findById(productId);
    res.status(200).json({ product });
  } catch (err) {
    res.status(404).json({ message: "No Product FOund" });
    console.log(err.message);
  }
};

const updateProduct = async (req, res, next) => {
  const productId = req.params.id;
  try {
    let product = await Product.findByIdAndUpdate(productId, {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imgURL: req.body.imgURL,
      quantity: req.body.quantity,
      isFeatured: req.body.isFeatured,
    });
    product = await product.save();
    res.status(200).json({ product });
  } catch (err) {
    res.status(404).json({ message: "No Product FOund" });
    console.log(err.message);
  }
};

const deleteProduct = async (req, res, next) => {
  const productId = req.params.id;
  try {
    let product = await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: "Product Deleted" });
  } catch (err) {
    res.status(500).json({ message: "No Product FOund" });
    console.log(err.message);
  }
};

module.exports = {
  createProducts,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
