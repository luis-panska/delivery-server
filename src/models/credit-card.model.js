const mongoose = require("mongoose");

const CreditCardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    number: {
      type: String,
      required: true,
      unique: true,
    },
    expiration: {
      type: String,
      required: true,
    },
    cvv: {
      type: Number,
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

const CreditCard = mongoose.model("CreditCard", CreditCardSchema);

module.exports = CreditCard;
