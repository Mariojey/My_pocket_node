const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController')

router.route('/').get(
    reservationController.getAllReservations

).post(
    reservationController.createReservation
)

router.route('/client/:client').get(
    reservationController.getReservationByClient
)

router.route('/sort/start').get(
    reservationController.getReservationsSortedByStartData
)

router.route('/:id').get(
    reservationController.getReservationById
)
module.exports = router