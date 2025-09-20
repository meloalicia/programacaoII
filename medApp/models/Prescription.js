import mongoose from "mongoose";

const { Schema } = mongoose;

// schema de prescrições
const PrescriptionSchema = new Schema({
  prescriptionId: {
    type: String,
    required: [true, "PrescriptionId is required"],
    unique: true
  },

  patientId: {
    type: String,
    required: [true, "PatientId is required"]
  },

  doctorId: {
    type: String,
    required: [true, "DoctorId is required"]
  },

  medications: [
    {
      name: { type: String, required: [true, "Medication name is required"] },
      dosage: { type: String, required: [true, "Dosage is required"] }, // ex: "500mg"
      frequency: { type: String, required: [true, "Frequency is required"] }, // ex: "2x ao dia"
      duration: { type: String, required: [true, "Duration is required"] } // ex: "7 dias"
    }
  ],

  instructions: {
    type: String,
    required: false
},
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Prescription = mongoose.model("Prescription", PrescriptionSchema);

export default Prescription;
