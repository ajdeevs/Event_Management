const express = require("express");
const { registerUser, loginUser, getUserProfile } = require("../controllers/userController");
const { protect, authorizeRoles } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);

// Example: Admin-only route
router.get("/admin", protect, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome, Admin!" });
});

module.exports = router;
