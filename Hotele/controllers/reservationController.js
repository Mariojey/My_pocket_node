const Reservation = require('../models/Reservation')

exports.getAllReservations = async(req, res, next) => {
    try {
        const reservations = await Reservation.findAll();

        res.status(200).json({ reservations })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getReservationById = async(req, res, next) => {
    try {
        let id = req.params.id;
        const reservation = await Reservation.findReservationById(id)

        res.status(200).json({ reservation })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getReservationByClient = async(req, res, next) => {
    try {
        let client_id = req.params.client;
        const reservations = await Reservation.findReservationByClient(client_id)

        res.status(200).json({ reservations })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getReservationsSortedByStartData = async(req, res, next) => {
    try {
        const reservations = await Reservation.orderReservationByStartData()

        res.status(200).json({ reservations })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getReservtionsSortedByEndData = async(req, res, next) => {
    try {
        const reservations = await Reservation.orderReservationByEndData()

        res.status(200).json({ reservations })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.createReservation = async(req, res, next) => {
    try {
        let client_id = req.body.client_id;
        let start_date = req.body.start_date;
        let end_date = req.body.end_date;
        let room_id = req.body.room_id;
        let parking_id = req.body.parking_id;
        let is_done = req.body.is_done;

        let reservation = new Reservation(client_id, start_date, end_date, room_id, parking_id, is_done)
        reservation = await reservation.save();

        res.status(200).json({ message: "Reservation Created", reservation })
    } catch (error) {
        console.log(error);
        next(error)
    }
}