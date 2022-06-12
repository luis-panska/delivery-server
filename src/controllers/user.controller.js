const bycrypt = require("bcryptjs");
const User = require("../models/user.model");

const validateEmailInUse = async (email) => {
  if (!email) throw new Error("El correo es un campo obligatorio");
  const user = await User.findOne({ email });
  if (user) throw new Error("El correo ya está en uso");
};

const validatePhoneInUse = async (phone) => {
  if (!phone) throw new Error("El telefono es un campo obligatorio");
  const user = await User.findOne({ phone });
  if (user) throw new Error("El telefono ya está en uso");
};

const validatePassword = async (password) => {
  if (!password) throw new Error("La contraseña es un campo obligatorio");
};

const validateUsername = async (username) => {
  if (!username) {
    throw new Error("El nombre de usuario es un campo obligatorio");
  }
  const user = await User.findOne({ username });
  if (user) throw new Error("El nombre de usuario ya está en uso");
};

const validateData = async (email, username, phone, password) => {
  await validateEmailInUse(email);
  await validateUsername(username);
  await validatePhoneInUse(phone);
  await validatePassword(password);
};

const create = async (username, phone, email, password) => {
  await validateData(email, username, phone, password);
  const newUser = new User({
    username,
    email,
    password: await bycrypt.hash(password, 10),
    phone,
  });
  await newUser.save();
  return newUser;
};

module.exports = {
  create,
};
