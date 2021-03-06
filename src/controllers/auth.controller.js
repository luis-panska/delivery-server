const User = require("../models/user.model");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("No hay un usuario registrado con ese email");
  if (!(await bycrypt.compare(password, user.password))) {
    throw new Error("Contraseña incorrecta");
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return {
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
    },
  };
};

module.exports = { login };
