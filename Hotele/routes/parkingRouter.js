const express = require('express');
const router = express.Router();
const parkingController = require('../controllers/parkingController')

router.route('/').get(
    parkingController.getAllParkings
)

module.exports = router