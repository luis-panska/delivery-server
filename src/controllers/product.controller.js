const Product = require("../models/product.model");
const Category = require("../models/category.model");

const validateName = async (name) => {
  if (!name) {
    throw new Error("El nombre del producto es un campo obligatorio");
  }
  const product = await Product.findOne({ name });
  if (product) throw new Error("El nombre del producto ya está en uso");
};
const validateImg = async (image) => {
  if (!image) throw new Error("La imagen es un campo obligatorio");
};
const validateDescription = async (description) => {
  if (!description) throw new Error("La descripción es un campo obligatorio");
};
const validatePrice = async (price) => {
  if (!price) throw new Error("El precio es un campo obligatorio");
};
const validateExist = async (id) => {
  if (!id) throw new Error("El id es un campo obligatorio");
  const product = await Product.findById(id);
  if (!product) throw new Error("El producto no existe");
};
const validateCategory = async (categoryId) => {
  if (!categoryId) throw new Error("La categoría es un campo obligatorio");
  const category = await Category.findById(categoryId);
  if (!category) throw new Error("La categoría no existe");
};

const validateData = async (name, image, description, price, categoryId) => {
  await validateName(name);
  await validateImg(image);
  await validateDescription(description);
  await validatePrice(price);
};

const list = async () => {
  return await Product.find();
};

const listOne = async (id) => {
  await validateExist(id);
  return await Product.findById(id);
};

const create = async (name, image, description, price, categoryId) => {
  await validateData(name, image, description, price, categoryId);
  const newProduct = new Product({
    name,
    image,
    description,
    price,
    categoryId,
  });
  await newProduct.save();
  return newProduct;
};

const deleteOne = async (id) => {
  await validateExist(id);
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  create,
  list,
  listOne,
  deleteOne,
};
