const Venue = require("../models/venueModel");

// @desc    Create a new venue
// @route   POST /api/venues
// @access  Admin
const createVenue = async (req, res) => {
  try {
    const { name, location, capacity } = req.body;

    const venue = await Venue.create({
      name,
      location,
      capacity,
      createdBy: req.user.id,
    });

    res.status(201).json(venue);
  } catch (error) {
    res.status(500).json({ message: "Error creating venue", error: error.message });
  }
};

// @desc    Get all venues
// @route   GET /api/venues
// @access  Public
const getAllVenues = async (req, res) => {
  try {
    const venues = await Venue.find();
    res.json(venues);
  } catch (error) {
    res.status(500).json({ message: "Error fetching venues", error: error.message });
  }
};

// @desc    Get a single venue
// @route   GET /api/venues/:id
// @access  Public
const getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findById(req.params.id);
    if (!venue) return res.status(404).json({ message: "Venue not found" });

    res.json(venue);
  } catch (error) {
    res.status(500).json({ message: "Error fetching venue", error: error.message });
  }
};

// @desc    Update a venue
// @route   PUT /api/venues/:id
// @access  Admin
const updateVenue = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const { name, location, capacity } = req.body;

    const venue = await Venue.findById(req.params.id);
    if (!venue) {
      return res.status(404).json({ message: "Venue not found" });
    }

    venue.name = name || venue.name;
    venue.location = location || venue.location;
    venue.capacity = capacity || venue.capacity;

    const updatedVenue = await venue.save();
    res.json(updatedVenue);
  } catch (error) {
    res.status(500).json({ message: "Error updating venue", error: error.message });
  }
};

// @desc    Delete a venue
// @route   DELETE /api/venues/:id
// @access  Admin
const deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findById(req.params.id);
    if (!venue) return res.status(404).json({ message: "Venue not found" });

    await venue.deleteOne();
    res.json({ message: "Venue deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting venue", error: error.message });
  }
};

module.exports = { createVenue, getAllVenues, getVenueById, updateVenue, deleteVenue };
