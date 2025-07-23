const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Product");

exports.getDashboardStats = async (req, res) => {
  try {
    // Total users
    const userCount = await User.countDocuments();

    // Total orders
    const orderCount = await Order.countDocuments();

    // Total revenue
    const revenueResult = await Order.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: "$total" } } },
    ]);
    const totalRevenue = revenueResult[0]?.totalRevenue || 0;

    // Total products
    const productCount = await Product.countDocuments();

    res.status(200).json({
      userCount,
      orderCount,
      productCount,
      totalRevenue,
    });
  } catch (err) {
    console.error("Error fetching dashboard stats:", err);
    res.status(500).json({ error: "Failed to fetch admin stats" });
  }
};
