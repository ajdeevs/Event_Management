const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  facilities: {
    type: [String], // Example: ["WiFi", "Parking", "Stage"]
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Venue = mongoose.model("Venue", venueSchema);
module.exports = Venue;
