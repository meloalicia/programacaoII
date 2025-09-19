import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

// schema de consultas
const doctorSchema = new Schema({
   doctorId: {
        type: String,
        required: [true, 'DoctorId is required']
    },

    createdAt: {
        type: Date,
        default: Date.now
    }, 
    
    nome: {
        type: String,
        required: [true, 'Doctor name is required']

    },

    login: {
        type: String,
        required: [true, 'Login is required'],
        unique: true
    },

    senha: {
        type: String,
        required: [true, 'Password is required']
    }, 

    medicalSpecialty: {
        type: String,
        required: [true, 'Medical Specialty is required']
    },

    medicalRegistration: {
        type: String,
        required: [true, 'Medical Registration is required'],
        unique: true
    },

    email: {
        type: String,
        required: [true, 'E-mail is required']
    },

    phone: {
        type: String,
        required: [true, 'Phone number is required']
    }
});

const doctor = mongoose.model('Doctor', doctorSchemaSchema);

export default doctor;

