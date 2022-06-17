const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");
const {
  create,
  listOne,
  list,
  listProductsByCategory,
  deleteOne,
} = require("../controllers/category.controller");

router.get("", async (req, res) => {
  try {
    const categories = await list();
    res.status(200).json({
      ok: true,
      message: "Categorias encontradas",
      categories,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      stack: error.message,
    });
  }
});

router.get("/:id/products", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await listProductsByCategory(id);
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
    const category = await listOne(id);
    res.status(200).json({
      ok: true,
      message: "Categoria encontrada",
      category,
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
    const { name, image, description } = req.body;
    const newCategory = await create(name, image, description);
    res.status(200).json({
      ok: true,
      message: "Categoria registrada correctamente",
      category: newCategory,
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
    const deletedCategory = await deleteOne(id);
    res.status(200).json({
      ok: true,
      message: "Categoria eliminada correctamente",
      category: deletedCategory,
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
