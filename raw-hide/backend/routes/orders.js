const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const { placeOrder, getUserOrders } = require("../controllers/orderController");

router.post("/", verifyToken, placeOrder);
router.get("/", verifyToken, getUserOrders);

module.exports = router;
