const mongoose = require("mongoose");

const Schedule = new mongoose.Schema(
  {
    medic: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Medic"
    },
    hour: {
      type: String
    },
    scheduled: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Schedule", Schedule);