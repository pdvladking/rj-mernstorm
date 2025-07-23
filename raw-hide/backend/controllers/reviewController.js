const Product = require("../models/Product");

exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const { productId } = req.params;
  const userId = req.user.userId; // from JWT payload
  const userName = req.user.name || "Anonymous";

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: "Product not found" });

    // Check if user already reviewed
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === userId
    );
    if (alreadyReviewed)
      return res
        .status(400)
        .json({ error: "Product already reviewed by this user" });

    // Push review and update stats
    const newReview = {
      user: userId,
      name: userName,
      rating: Number(rating),
      comment,
    };

    product.reviews.push(newReview);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, r) => acc + r.rating, 0) /
      product.numReviews;

    await product.save();
    res.status(201).json({ message: "Review added", reviews: product.reviews });
  } catch (err) {
    console.error("Error adding review:", err);
    res.status(500).json({ error: "Failed to add review" });
  }
};

exports.getReviewsByProductId = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: "Product not found" });

    res.status(200).json(product.reviews);
  } catch (err) {
    console.error("Error fetching reviews:", err);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
};
