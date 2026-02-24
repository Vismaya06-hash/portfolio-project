const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.log("MongoDB Connection Error:", err));

// Database Schema
const Message = mongoose.model("Message", {
  name: String,
  email: String,
  message: String
});

// API Route to Receive Form Data
app.post("/contact", async (req, res) => {
  const msg = new Message(req.body);
  await msg.save();
  res.json({ success: true, message: "Data Stored Successfully" });
});

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Server Running Successfully!");
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});