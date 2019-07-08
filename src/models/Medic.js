const mongoose = require("mongoose");

const Medic = new mongoose.Schema(
  {
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },
    crc: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Medic", Medic);