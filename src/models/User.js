const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", User);