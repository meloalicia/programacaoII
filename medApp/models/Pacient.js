import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

// schema de consultas
const PacientSchema = new Schema({
   pacientId: {
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

    password: {
        type: String,
        required: [true, 'Password is required']
    }, 
     address: {
         type: String,
         required: [true, 'Address is required']
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

const pacient = mongoose.model('Pacient', PacientSchemaSchemaSchema);

export default pacient;

v