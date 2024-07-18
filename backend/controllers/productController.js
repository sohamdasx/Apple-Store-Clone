const Product = require("../models/product");
const User = require("../models/user");
const mongoose = require("mongoose");

const getProducts = async (req, res) => {
  const products = await Product.find({});

  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

const purchaseProduct = async (req, res) => {
  const { productId } = req.body;
  const user = await User.findById(req.user.id);

  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (user.virtualMoney < product.price) {
    return res.status(400).json({ message: "Not enough virtual money" });
  }

  if (product.inStock < 1) {
    return res.status(400).json({ message: "Product out of stock" });
  }

  user.virtualMoney -= product.price;
  product.inStock -= 1;

  await user.save();
  await product.save();

  res.json({ message: "Product purchased successfully", user });
};

module.exports = {
  getProducts,
  getProduct,
  purchaseProduct,
};
