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