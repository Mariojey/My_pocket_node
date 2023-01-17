const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController')

router.route('/').get(
    reservationController.getAllReservations

)

module.exports = router