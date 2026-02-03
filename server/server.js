const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

/* Connect Database */
connectDB();

/* Middlewares */
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

/* Routes */
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));

/* Test route */
app.get("/", (req, res) => {
  res.send("API is running");
});

/* Start server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
