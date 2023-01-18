const express = require('express');
const router = express.Router();
const parkingController = require('../controllers/parkingController')

router.route('/').get(
    parkingController.getAllParkings
)

router.route('/:id').get(
    parkingController.getParkingById
)
module.exports = router