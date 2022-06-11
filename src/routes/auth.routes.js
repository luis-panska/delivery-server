const express = require("express");

const router = express.Router();

// Login
router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    return res.status(200).json({
      ok: true,
      message: "Login successful",
      token: "token",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Login failed",
    });
  }
});

module.exports = router;
