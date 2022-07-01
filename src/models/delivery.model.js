const mongoose = require("mongoose");

const DeliverySchema = new mongoose.Schema(
  {
    identification: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pin: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Delivery = mongoose.model("Delivery", DeliverySchema);

module.exports = Delivery;
