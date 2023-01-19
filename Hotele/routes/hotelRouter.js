const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController')

router.route('/').get(
        hotelController.getAllHotels
    )
    .post(
        hotelController.createHotel
    )
router.route('/country/:id').get(
    hotelController.getHotelByCountry
)
router.route('/:id').get(
    hotelController.getHotelById
)
module.exports = router