const express = require("express");
const router = express.Router();
const CreditCard = require("../models/credit-card.model");
const {
  create,
  listOne,
  list,
  deleteOne,
} = require("../controllers/credit-card.controller");

router.get("", async (req, res) => {
  try {
    const creditCards = await list();
    res.status(200).json({
      ok: true,
      message: "Tarjetas de crédito encontradas",
      creditCards,
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
    const creditCard = await listOne(id);
    res.status(200).json({
      ok: true,
      message: "Tarjeta de crédito encontrada",
      creditCard,
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
    const { name, number, expiration, cvv, userId } = req.body;
    const creditCard = await create(name, number, expiration, cvv, userId);
    res.status(200).json({
      ok: true,
      message: "Tarjeta de crédito creada",
      creditCard,
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
    const creditCard = await deleteOne(id);
    res.status(200).json({
      ok: true,
      message: "Tarjeta de crédito eliminada",
      creditCard,
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
