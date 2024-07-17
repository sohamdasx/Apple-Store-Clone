const express = require("express");
const {
  getProducts,
  purchaseProduct,
} = require("../controllers/productController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getProducts);
router.post("/purchase", protect, purchaseProduct);

module.exports = router;
