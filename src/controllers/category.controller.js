const Category = require("../models/category.model");
const Product = require("../models/product.model");
const validateName = async (name) => {
  if (!name) {
    throw new Error("El nombre de la categoria es un campo obligatorio");
  }
  const category = await Category.findOne({ name });
  if (category) throw new Error("El nombre de la categoria ya está en uso");
};

const validateImg = async (image) => {
  if (!image) throw new Error("La imagen es un campo obligatorio");
};
const validateDescription = async (description) => {
  if (!description) throw new Error("La descripción es un campo obligatorio");
};
const validateExist = async (id) => {
  if (!id) throw new Error("La categoria no existe");
  const category = await Category.findById(id);
  if (!category) throw new Error("La categoria no existe");
};

const validateData = async (name, image, description) => {
  await validateName(name);
  await validateImg(image);
  await validateDescription(description);
};

const list = async () => {
  return await Category.find();
};

const listProductsByCategory = async (id) => {
  await validateExist(id);
  return await Product.find({ categoryId: id });
};

const listOne = async (id) => {
  await validateExist(id);
  return await Category.findById(id);
};

const create = async (name, image, description) => {
  await validateData(name, image, description);
  const newCategory = new Category({
    name,
    image,
    description,
  });
  await newCategory.save();
  return newCategory;
};

const deleteOne = async (id) => {
  await validateExist(id);
  return await Category.findByIdAndDelete(id);
};

module.exports = {
  create,
  list,
  listOne,
  deleteOne,
  listProductsByCategory,
};
