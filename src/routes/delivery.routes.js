const express = require("express");
const router = express.Router();
const {
  create,
  listOne,
  list,
  deleteOne,
} = require("../controllers/delivery.controller");

router.get("", async (req, res) => {
  try {
    const deliveries = await list();
    res.status(200).json({
      ok: true,
      message: "Lista de deliveries",
      deliveries,
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
    const delivery = await listOne(id);
    res.status(200).json({
      ok: true,
      message: "Delivery encontrado",
      delivery,
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
    const { identification, address, pin, phone, date, userId } = req.body;
    const newDelivery = await create(
      identification,
      address,
      pin,
      phone,
      date,
      userId
    );
    res.status(200).json({
      ok: true,
      message: "Delivery creado correctamente",
      delivery: newDelivery,
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
    const delivery = await deleteOne(id);
    res.status(200).json({
      ok: true,
      message: "Delivery eliminado",
      delivery,
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
