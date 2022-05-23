const express = require("express");
const {
  createProducts,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product-controllers");
const Product = require("../model/Product");
const router = express.Router();

router.get("/", getProducts);

router.post("/", createProducts);

router.get("/:id", getProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
