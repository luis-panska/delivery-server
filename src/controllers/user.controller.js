const bycrypt = require("bcryptjs");
const User = require("../models/user.model");

const validateEmailInUse = async (email) => {
  const user = await User.findOne({ email });
  if (user) throw new Error("Email already in use");
};

const validatePhoneInUse = async (phone) => {
  const user = await User.findOne({ phone });
  if (user) throw new Error("Phone already in use");
};

const validateUsername = async (username) => {
  const user = await User.findOne({ username });
  if (user) throw new Error("Username already in use");
};

const create = async (name, lastname, email, password) => {
  await validateEmailInUse(email);
  await validateUsername(username);
  await validatePhoneInUse(phone);
  const newUser = new User({
    name,
    lastname,
    email,
    password: await bycrypt.hash(password, 10),
  });
  await newUser.save();
  return newUser;
};

module.exports = {
  create,
};
