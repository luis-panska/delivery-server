const express = require("express");
const router = express.Router();
const MethodPayment = require("../models/method-payment.model");
const {
  create,
  listOne,
  list,
  deleteOne,
} = require("../controllers/method-payment.controller");

router.get("", async (req, res) => {
  try {
    const methodsPayment = await list();
    res.status(200).json({
      ok: true,
      message: "Métodos de pago encontrados",
      methodsPayment,
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
    const methodPayment = await listOne(id);
    res.status(200).json({
      ok: true,
      message: "Método de pago encontrado",
      methodPayment,
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
    const newMethodPayment = await create(name, image, description);
    res.status(200).json({
      ok: true,
      message: "Método de pago creado",
      MethodPayment: newMethodPayment,
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
    const deletedMethodPayment = await deleteOne(id);
    res.status(200).json({
      ok: true,
      message: "Método de pago eliminado",
      MethodPayment: deletedMethodPayment,
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
