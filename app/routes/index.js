const express = require("express");
const router = express.Router();
const trainerRoutes = require("./trainerRoutes");

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    method: req.method,
  });
});

router.use("/trainers", trainerRoutes);

module.exports = router;
