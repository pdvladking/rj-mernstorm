const Product = require("../models/Product");

// 🔍 Get all products with filters + pagination
exports.getProducts = async (req, res) => {
  const {
    keyword = "",
    category,
    minPrice,
    maxPrice,
    page = 1,
    limit = 10,
  } = req.query;

  const query = {
    $and: [],
  };

  // Keyword search (name + description)
  if (keyword) {
    query.$and.push({
      $or: [
        { name: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    });
  }

  // Category filter
  if (category) {
    query.$and.push({ category });
  }

  // Price range filter
  if (minPrice || maxPrice) {
    query.$and.push({
      price: {
        ...(minPrice && { $gte: Number(minPrice) }),
        ...(maxPrice && { $lte: Number(maxPrice) }),
      },
    });
  }

  // Remove empty $and to show all results
  if (query.$and.length === 0) delete query.$and;

  try {
    const skip = (page - 1) * limit;
    const total = await Product.countDocuments(query);
    const products = await Product.find(query).skip(skip).limit(Number(limit));

    res.status(200).json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      products,
    });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// 📦 Get single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

// ➕ Create new product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ error: "Failed to create product" });
  }
};

// 🔁 Update product by ID
exports.updateProduct = async (req, res) => {
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
};

// ❌ Delete product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Product not found" });
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
};
