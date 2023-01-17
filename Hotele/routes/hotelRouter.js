const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController')

router.route('/').get(
        hotelController.getAllHotels
    )
    /*.post(
        console.log('.')
    )
    router.route('/:id').get(
        console.log('.')
    )
    */
module.exports = router