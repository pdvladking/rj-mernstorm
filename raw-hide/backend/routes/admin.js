const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");

const {
  getDashboardStats,
  getTopProducts, // optional future route
  getAllUsers, // optional future route
  manageOrderStatus, // optional future route
} = require("../controllers/adminController");

// 🔍 Dashboard stats: users, orders, revenue
router.get("/dashboard", verifyToken, verifyAdmin, getDashboardStats);

// 🥇 Top-rated or most purchased products (optional)
router.get("/top-products", verifyToken, verifyAdmin, getTopProducts);

// 🧑‍💼 All users list (optional)
router.get("/users", verifyToken, verifyAdmin, getAllUsers);

// 🚚 Update order status manually (optional)
router.patch("/orders/:id/status", verifyToken, verifyAdmin, manageOrderStatus);

module.exports = router;
