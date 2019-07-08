const mongoose = require("mongoose");

const Consultation = new mongoose.Schema(
  {
    medic: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Medic"
    },
    client: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    },
    schedule: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "schedules"
    },
    note: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Consultation", Consultation);