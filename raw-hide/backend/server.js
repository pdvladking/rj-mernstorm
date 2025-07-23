const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// 🌍 Environment
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// 🧩 Middleware
app.use(cors());
app.use(express.json());

// 🔥 Static folder for local image uploads
app.use("/uploads", express.static("uploads"));

// 🩺 Health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running..." });
});

// 📦 Route imports
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");
const reviewRoutes = require("./routes/reviews"); // Bonus
const uploadRoutes = require("./routes/upload"); // Bonus
const adminRoutes = require("./routes/admin"); // Bonus

// 🚦 Mount routes
app.use("/api", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/admin", adminRoutes);

// 🛡️ Global error handler (at end of middleware stack)
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

// 🔌 MongoDB connect & server launch
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected ✅");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌", err);
  });
