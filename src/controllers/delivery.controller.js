const Delivery = require("../models/delivery.model");
const User = require("../models/user.model");

const validateIdentification = async (identification) => {
  if (!identification) {
    throw new Error("La identificación es requerida");
  }
};
const validateAddress = async (address) => {
  if (!address) {
    throw new Error("La dirección es requerida");
  }
};
const validatePin = async (pin) => {
  if (!pin) {
    throw new Error("El pin es un campo obligatorio");
  }
};
const validatePhone = async (phone) => {
  if (!phone) throw new Error("El teléfono es un campo obligatorio");
};
const validateDate = async (date) => {
  if (!date) throw new Error("La fecha es un campo obligatorio");
};
const validateExist = async (id) => {
  if (!id) throw new Error("El id es un campo obligatorio");
  const delivery = await Delivery.findById(id);
  if (!delivery) throw new Error("El delivery no existe");
};
const validateUserId = async (userId) => {
  if (!userId) throw new Error("El id del usuario es un campo obligatorio");
  const user = await User.findById(userId);
  if (!user) throw new Error("El usuario no existe");
};

const validateData = async (
  identification,
  address,
  pin,
  phone,
  date,
  userId
) => {
  await validateIdentification(identification);
  await validateAddress(address);
  await validatePin(pin);
  await validatePhone(phone);
  await validateDate(date);
  await validateUserId(userId);
};

const list = async () => {
  return await Delivery.find();
};

const listOne = async (id) => {
  await validateExist(id);
  return await Delivery.findById(id);
};

const create = async (identification, address, pin, phone, date, userId) => {
  await validateData(identification, address, pin, phone, date, userId);
  const userEqual = await User.findOne({ username: identification });
  if (userEqual.username !== identification) {
    throw new Error("La identificación debe ser igual a su nombre de usuario");
  }
  const newDelivery = new Delivery({
    identification,
    address,
    pin,
    phone,
    date,
    userId,
  });
  await newDelivery.save();
  return newDelivery;
};

const deleteOne = async (id) => {
  await validateExist(id);
  return await Delivery.findByIdAndDelete(id);
};

module.exports = {
  create,
  list,
  listOne,
  deleteOne,
};
