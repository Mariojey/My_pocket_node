const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController')

router.route('/').get(
    cityController.getAllCities
)
router.route('/:id').get(
    cityController.getCityById
)

module.exports = router