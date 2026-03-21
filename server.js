const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    console.log("New Message:");
    console.log(name, email, message);

    res.json({ message: "Message sent successfully!" });
});

// Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});