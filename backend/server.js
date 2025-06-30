const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API is running...");
});


mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected ✅");

    const productRoutes = require("./routes/product");
    const authRoutes = require("./routes/authRoutes");

    app.use("/api/products", productRoutes);
    app.use("/api", authRoutes);

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌", err);
  });