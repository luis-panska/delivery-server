const bycrypt = require("bcryptjs");
const User = require("../models/user.model");

const validateEmailInUse = async (email) => {
  const user = await User.findOne({ email });
  if (user) throw new Error("Email already in use");
};

const create = async (name, lastname, email, password) => {
  await validateEmailInUse(email);
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
