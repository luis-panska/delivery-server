const MethodPayment = require("../models/method-payment.model");

const validateName = async (name) => {
  if (!name) {
    throw new Error("El nombre del metodo de pago es un campo obligatorio");
  }
};
const validateImg = async (image) => {
  if (!image) {
    throw new Error("La imagen del metodo de pago es un campo obligatorio");
  }
};
const validateDescription = async (description) => {
  if (!description) {
    throw new Error(
      "La descripción del metodo de pago es un campo obligatorio"
    );
  }
};

const validateExist = async (id) => {
  if (!id) {
    throw new Error(
      "El identificador del metodo de pago es un campo obligatorio"
    );
  }
  const methodPayment = await MethodPayment.findById(id);
  if (!methodPayment) throw new Error("El metodo de pago no existe");
};

const validateData = async (name, image, description) => {
  await validateName(name);
  await validateImg(image);
  await validateDescription(description);
};

const list = async () => {
  return await MethodPayment.find();
};

const listOne = async (id) => {
  await validateExist(id);
  return await MethodPayment.findById(id);
};

const create = async (name, image, description) => {
  await validateData(name, image, description);
  const newMethodPayment = new MethodPayment({
    name,
    image,
    description,
  });
  await newMethodPayment.save();
  return newMethodPayment;
};

const deleteOne = async (id) => {
  await validateExist(id);
  return await MethodPayment.findByIdAndDelete(id);
};

module.exports = {
  create,
  list,
  listOne,
  deleteOne,
};
