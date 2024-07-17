const Product = require("../models/product");
const User = require("../models/user");

exports.getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

exports.purchaseProduct = async (req, res) => {
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
