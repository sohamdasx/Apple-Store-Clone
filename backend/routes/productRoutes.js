const express = require("express");
const {
  getProducts,
  purchaseProduct,
} = require("../controllers/productController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// // require auth for all product routes
// router.use(protect);

router.get("/", getProducts);

router.post("/purchase", protect, purchaseProduct);

module.exports = router;
