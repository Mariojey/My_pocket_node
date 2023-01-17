const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController')

router.route('/').get(
    cityController.getAllCities
)

module.exports = router