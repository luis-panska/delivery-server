const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { create } = require("../controllers/user.controller");

router.get("", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});
router.post("", async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;
    const newUser = await create(name, lastname, email, password);
    res.status(200).json({
      message: "User created",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      stack: error.message,
    });
  }
});
router.patch(":id", (req, res) => {
  res.send("Hello World");
});
router.delete(":id", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
