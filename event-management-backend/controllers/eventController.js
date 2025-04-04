const Event = require("../models/eventModel");
const Venue = require("../models/venueModel");

// @desc    Create a new event
// @route   POST /api/events
// @access  Admin
const createEvent = async (req, res) => {
  try {
    const { title, date, organizer, time, venueId } = req.body;

    const venue = await Venue.findById(venueId);
    if (!venue) {
      return res.status(404).json({ message: "Venue not found" });
    }

    const event = await Event.create({
      title,
      date,
      organizer,
      time,
      venue: venueId,
      createdBy: req.user.id,
    });

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error: error.message });
  }
};

// @desc    Get all events
// @route   GET /api/events
// @access  Public
const getAllEvents = async (_req, res) => {
  try {
    const events = await Event.find().populate("venue", "name location");
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error: error.message });
  }
};

// @desc    Get a single event
// @route   GET /api/events/:id
// @access  Public
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate("venue", "name location");
    if (!event) return res.status(404).json({ message: "Event not found" });

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event", error: error.message });
  }
};

// @desc    Update an event
// @route   PUT /api/events/:id
// @access  Admin
const updateEvent = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const { name, description, date, venueId } = req.body;

    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (venueId) {
      const venue = await Venue.findById(venueId);
      if (!venue) {
        return res.status(404).json({ message: "Venue not found" });
      }
      event.venue = venueId;
    }

    event.name = name || event.name;
    event.description = description || event.description;
    event.date = date || event.date;

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: "Error updating event", error: error.message });
  }
};

// @desc    Delete an event
// @route   DELETE /api/events/:id
// @access  Admin
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    await event.deleteOne();
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error: error.message });
  }
};

module.exports = { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };
