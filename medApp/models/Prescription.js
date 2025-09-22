import mongoose from "mongoose";

const { Schema } = mongoose;

// schema de prescrições
const PrescriptionSchema = new Schema({
    date: {
        type: Date,
        required: [true, "Date of Prescription is required"]
    },

    appointmentIdId: {
    type: String,
    required: [true, "PrescriptionId is required"],
    unique: true
  },

  medicine: {
    type: String,
    required: [true, "Medicine is required"]
  },

  dosage: {
    type: String,
    required: [true, "dosage is required"]
  },

  instructions: {
    type: String,
},

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Prescription = mongoose.model("Prescription", PrescriptionSchema);

export default Prescription;
