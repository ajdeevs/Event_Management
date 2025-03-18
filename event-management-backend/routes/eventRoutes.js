const express = require("express");
const { createEvent, updateEvent, deleteEvent, getEvents, getEventById } = require("../controllers/eventController");

const router = express.Router();

// Define routes
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.get("/", getEvents);
router.get("/:id", getEventById);

module.exports = router;
