const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const {
  getCart,
  addToCart,
  removeFromCart,
} = require("../controllers/cartController");

router.get("/", verifyToken, getCart);
router.post("/", verifyToken, addToCart);
router.delete("/:productId", verifyToken, removeFromCart);

module.exports = router;
