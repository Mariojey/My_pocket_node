const express = require('express');
const router = express.Router();
const parkingController = require('../controllers/parkingController')

router.route('/').get(
    parkingController.getAllParkingsExtended
).post(
    parkingController.createParking
)

router.route('/all').get(
    parkingController.getAllParkings
)

router.route('/hotel/:id').get(
    parkingController.getParkingByHotel
)
router.route('/:id').get(
    parkingController.getParkingById
)
module.exports = router