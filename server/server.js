const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

/* ==============================
   Connect Database
============================== */
connectDB();

/* ==============================
   CORS Configuration
============================== */
const allowedOrigins = [
  "http://localhost:5173",
  "https://takework.vercel.app"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // allow all (Railway-safe)
      }
    },
    credentials: true
  })
);

/* ==============================
   Middlewares
============================== */
app.use(express.json());

/* ==============================
   Routes
============================== */
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));

/* ==============================
   Health Check / Fallback
============================== */
app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

/* ==============================
   Server St
