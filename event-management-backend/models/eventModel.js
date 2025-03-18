const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // Reference to User
}, { timestamps: true });

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
