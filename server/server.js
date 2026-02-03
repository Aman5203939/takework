const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

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
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Allow all in production (important for cyclic)
      }
    },
    credentials: true
  })
);

app.use(express.json());

/* ==============================
   Routes
============================== */

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));

/* ==============================
   Serve Frontend (IMPORTANT)
============================== */

const __dirnamePath = path.resolve();

app.use(express.static(path.join(__dirnamePath, "client/dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirnamePath, "client/dist", "index.html"));
});

/* ==============================
   Server Start
============================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
