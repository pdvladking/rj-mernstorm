// routes/product.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Products route is working!" });
});

module.exports = router;