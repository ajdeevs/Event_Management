const Venue = require("../models/venueModel");

// Create a new venue
const createVenue = async (req, res) => {
  try {
    const { name, location, capacity } = req.body;
    const venue = new Venue({ name, location, capacity });
    await venue.save();
    res.status(201).json(venue);
  } catch (error) {
    res.status(500).json({ message: "Error creating venue", error });
  }
};

// Get all venues
const getVenues = async (req, res) => {
  try {
    const venues = await Venue.find();
    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({ message: "Error fetching venues", error });
  }
};

// Get single venue by ID
const getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findById(req.params.id);
    if (!venue) {
      return res.status(404).json({ message: "Venue not found" });
    }
    res.status(200).json(venue);
  } catch (error) {
    res.status(500).json({ message: "Error fetching venue", error });
  }
};

// Update venue
const updateVenue = async (req, res) => {
  try {
    const venue = await Venue.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!venue) {
      return res.status(404).json({ message: "Venue not found" });
    }
    res.status(200).json(venue);
  } catch (error) {
    res.status(500).json({ message: "Error updating venue", error });
  }
};

// Delete venue
const deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findByIdAndDelete(req.params.id);
    if (!venue) {
      return res.status(404).json({ message: "Venue not found" });
    }
    res.status(200).json({ message: "Venue deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting venue", error });
  }
};

module.exports = { createVenue, getVenues, getVenueById, updateVenue, deleteVenue }; // ✅ Ensure all functions are exported
