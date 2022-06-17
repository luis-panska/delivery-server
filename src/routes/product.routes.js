const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const {
  create,
  listOne,
  list,
  deleteOne,
} = require("../controllers/product.controller");

router.get("", async (req, res) => {
  try {
    const products = await list();
    res.status(200).json({
      ok: true,
      message: "Productos encontrados",
      products,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      stack: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await listOne(id);
    res.status(200).json({
      ok: true,
      message: "Producto encontrado",
      product,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      stack: error.message,
    });
  }
});

router.post("", async (req, res) => {
  try {
    const { name, image, description, price, categoryId } = req.body;
    const newProduct = await create(
      name,
      image,
      description,
      price,
      categoryId
    );
    res.status(200).json({
      ok: true,
      message: "Producto registrado correctamente",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      stack: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await deleteOne(id);
    res.status(200).json({
      ok: true,
      message: "Producto eliminado correctamente",
      product,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      stack: error.message,
    });
  }
});

module.exports = router;
