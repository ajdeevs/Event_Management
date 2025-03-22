const express = require("express");
const { protect, authorizeRoles } = require("../middlewares/authMiddleware");
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const router = express.Router();

// Routes
router.post("/", protect, authorizeRoles("admin", "organizer"), createEvent);
router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.put("/:id", protect, authorizeRoles("admin", "organizer"), updateEvent);
router.delete("/:id", protect, authorizeRoles("admin"), deleteEvent);

module.exports = router;
