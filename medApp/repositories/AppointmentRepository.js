import { Appointment } from "../models/Appointment.js";

const getAllAppointment = async () => {
    return await Appointment.find();
};

const getAppointment = async (id) => {
    try {
        return await Appointment.findById();
    } catch (error) {
        throw new Error(error);
    }
};

const saveAppointment = async({date, doctorId, pacientId}) => {
    try {
        const prescription = new Appointment({date, doctorId, pacientId});
        return await prescription.save();
    } catch (error) {
        throw new Error(error);

    }
};

const updateAppointment = async (id, {date, doctorId, pacientId}) => {
    try {
        return await Appointment.findByAndUpdate(id, {date, doctorId, pacientId}, {new: true});
    } catch (error) {
        throw new Error(error)
    }
};

const deleteAppointment = async (id) => {
    try {
        return await Appointment.findByAndUpdate(id);
    } catch (error) {
        throw new Error(error);
    }
};

const appointmentRepository = {
    getAllAppointment, 
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment
};

export default appointmentRepository;