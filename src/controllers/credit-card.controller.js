const CreditCard = require("../models/credit-card.model");
const User = require("../models/user.model");

const validateName = async (name) => {
  if (!name) {
    throw new Error(
      "El nombre del dueño de la tarjeta es un campo obligatorio"
    );
  }
  const creditCard = await CreditCard.findOne({ name });
  if (creditCard) {
    throw new Error("El nombre del dueño de la tarjeta ya está en uso");
  }
};
const validateNumber = async (number) => {
  if (!number) {
    throw new Error("El número de la tarjeta es un campo obligatorio");
  }
};
const validateExpiration = async (expiration) => {
  if (!expiration) throw new Error("La fecha de expiración es un campo obligatorio");
};
const validateCvv = async (cvv) => {
  if (!cvv) throw new Error("El código de la tarjeta es un campo obligatorio");
};
const validateExist = async (id) => {
  if (!id) throw new Error("El id es un campo obligatorio");
  const creditCard = await CreditCard.findById(id);
  if (!creditCard) throw new Error("La tarjeta no existe");
};
const validateUserId = async (userId) => {
  if (!userId) throw new Error("El id del usuario es un campo obligatorio");
  const user = await User.findById(userId);
  if (!user) throw new Error("El usuario no existe");
};

const validateData = async (name, number, expiration, cvv, userId) => {
  await validateName(name);
  await validateNumber(number);
  await validateExpiration(expiration);
  await validateCvv(cvv);
  await validateUserId(userId);
};

const list = async () => {
  return await CreditCard.find();
};

const listOne = async (id) => {
  await validateExist(id);
  return await CreditCard.findById(id);
};

const create = async (name, number, expiration, cvv, userId) => {
  await validateData(name, number, expiration, cvv, userId);
  const creditCard = new CreditCard({
    name,
    number,
    expiration,
    cvv,
    userId,
  });
  await creditCard.save();
  return creditCard;
};

const deleteOne = async (id) => {
  await validateExist(id);
  return await CreditCard.findByIdAndDelete(id);
};

module.exports = {
  create,
  list,
  listOne,
  deleteOne,
};
