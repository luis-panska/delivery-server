const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    creditCardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CreditCard",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Invoice = mongoose.model("Invoice", InvoiceSchema);

module.exports = Invoice;
