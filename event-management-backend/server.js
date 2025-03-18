const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const eventRoutes = require("./routes/eventRoutes");
const venueRoutes = require("./routes/venueRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Failed:", err));

// Default Route
app.get("/", (req, res) => {
  res.send("Event Management API is running...");
});

// API Routes
app.use("/api/events", eventRoutes);
app.use("/api/venues", venueRoutes);
app.use("/api/users", userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
