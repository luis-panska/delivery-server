const mongoose = require("mongoose");

const MethodPaymentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
    },
    imageForm: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const MethodPayment = mongoose.model("MethodPayment", MethodPaymentSchema);

module.exports = MethodPayment;
