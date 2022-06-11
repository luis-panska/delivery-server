const express = require("express");
const { login } = require("../controllers/auth.controller");

const router = express.Router();

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const authData = await login(email, password);
    return res.status(200).json({
      ok: true,
      message: "Login successful",
      token: authData.token,
      user: authData.user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      stack: error.message,
    });
  }
});

module.exports = router;
