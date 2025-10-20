import { express } from "express";
import AppointmentService from "../services/AppointmentService"

let router = expressRouter();

router.get('appointments', async(req, res) => {
    try {
        const appointments = await AppointmentService.getAllAppointments();
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error); 
    }
});

router.get('getAppointment/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const appointment = await AppointmentService.getAppointments(id);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error); 
    }
});

router.post('/postAppointment/:id', async(req, res) => {
    const  {date, doctorId, pacientId} = req.body;
    try {
        const appointment = await AppointmentService.getAppointments( {date, doctorId, pacientId});
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error); 
    }
});

router.put('/appointments/:id', async(req, res) => {
    const {id} = req.params;
    const  {date, doctorId, pacientId} = req.body;
    try {
        const appointment = await AppointmentService.getAppointments(id, {date, doctorId, pacientId});
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error); 
    }
});

router.delete('/appointments/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const appointment = await AppointmentService.getAppointments(id);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error); 
    }
});


export default router();

