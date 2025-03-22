const express = require("express");
const { protect, authorizeRoles } = require("../middlewares/authMiddleware");
const {
  createVenue,
  getAllVenues,
  getVenueById,
  updateVenue,
  deleteVenue,
} = require("../controllers/venueController");

const router = express.Router();

// Routes
router.post("/", protect, authorizeRoles("admin"), createVenue);
router.get("/", getAllVenues);
router.get("/:id", getVenueById);
router.put("/:id", protect, authorizeRoles("admin"), updateVenue);
router.delete("/:id", protect, authorizeRoles("admin"), deleteVenue);

module.exports = router;
