module.exports = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied: Admins only" });
    }
    next();
  } catch (err) {
    console.error("Admin check error:", err);
    res.status(500).json({ error: "Failed to verify admin access" });
  }
};
