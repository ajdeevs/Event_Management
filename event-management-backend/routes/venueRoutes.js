const express = require("express");
const router = express.Router();
const {
  createVenue,
  getVenues,
  getVenueById,
  updateVenue,
  deleteVenue,
} = require("../controllers/venueController"); // ✅ Ensure correct path and functions

router.post("/", createVenue);
router.get("/", getVenues);
router.get("/:id", getVenueById);
router.put("/:id", updateVenue);  // ✅ Ensure updateVenue exists
router.delete("/:id", deleteVenue);  // ✅ Ensure deleteVenue exists

module.exports = router;
