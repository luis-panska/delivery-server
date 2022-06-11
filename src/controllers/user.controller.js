const bycrypt = require("bcryptjs");
const User = require("../models/user.model");

const validateEmailInUse = async (email) => {
  if (!email) throw new Error("Email is required");
  const user = await User.findOne({ email });
  if (user) throw new Error("Email already in use");
};

const validatePhoneInUse = async (phone) => {
  if (!phone) throw new Error("Phone is required");
  const user = await User.findOne({ phone });
  if (user) throw new Error("Phone already in use");
};

const validateUsername = async (username) => {
  if (!username) throw new Error("Username is required");
  const user = await User.findOne({ username });
  if (user) throw new Error("Username already in use");
};

const validateData = async (email, username, phone) => {
  await validateEmailInUse(email);
  await validateUsername(username);
  await validatePhoneInUse(phone);
};

const create = async (username, phone, email, password) => {
  await validateData(email, username, phone);
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
