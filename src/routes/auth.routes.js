const express = require("express");

const router = express.Router();

// Login
router.post("/login", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
