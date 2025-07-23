const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const verifyToken = require("../middleware/verifyToken");

// @desc    Get all products
// @route   GET /api/products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// @desc    Get single product by ID
// @route   GET /api/products/:id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// @desc    Create new product
// @route   POST /api/products
// @access  Protected
router.post("/", verifyToken, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ error: "Failed to create product" });
  }
});

// @desc    Update product by ID
// @route   PUT /api/products/:id
// @access  Protected
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Product not found" });
    res.status(200).json(updated);
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({ error: "Failed to update product" });
  }
});

// @desc    Delete product by ID
// @route   DELETE /api/products/:id
// @access  Protected
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Product not found" });
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

module.exports = router;
