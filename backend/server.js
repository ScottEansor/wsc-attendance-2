const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to MongoDB (replace <your_connection_string> with your actual MongoDB connection string)
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Connection error", error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// just basic.
