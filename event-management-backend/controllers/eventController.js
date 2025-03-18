const Event = require("../models/eventModel");

// Create a new event
const createEvent = async (req, res) => {
  try {
    const { name, date, location, description } = req.body;
    const event = new Event({ name, date, location, description });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
};

// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

// Get single event by ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event", error });
  }
};

// Update an event
const updateEvent = async (req, res) => {
  try {
    const { name, date, location, description } = req.body;
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { name, date, location, description },
      { new: true } // Return the updated document
    );

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error updating event", error });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error });
  }
};

module.exports = { createEvent, getEvents, getEventById, updateEvent, deleteEvent };
