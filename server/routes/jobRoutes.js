const router = require("express").Router();
const Job = require("../models/Job");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, async (req, res) => {
  const job = await Job.create({
    ...req.body,
    createdBy: req.user.id
  });

  res.json(job);
});

router.get("/", async (req, res) => {
  const jobs = await Job.find().populate("createdBy", "name");
  res.json(jobs);
});

module.exports = router;
