const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController')

router.route('/').get(
        hotelController.getAllHotelsExtended
    )
    .post(
        hotelController.createHotel
    )

router.route('/all').get(
    hotelController.getAllHotels
)
router.route('/country/:id').get(
    hotelController.getHotelByCountry
)

router.route('/city/:id').get(
        hotelController.getHotelByCity
    )
    //ASC or DESC
router.route('/stars').get(
    hotelController.getHotelSortedByStars
)
router.route('/stars/:count').get(
    hotelController.getHotelByStars
)

router.route('/:id').get(
    hotelController.getHotelById
)
module.exports = router