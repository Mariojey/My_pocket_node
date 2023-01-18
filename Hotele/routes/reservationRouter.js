const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController')

router.route('/').get(
    reservationController.getAllReservations

)
router.route('/:id').get(
    reservationController.getReservationById
)
module.exports = router