const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const { route } = require('./hotelRouter');

router.route('/').get(
    roomController.getAllRooms
)
router.route('/:id').get(
    roomController.getRoomById
)

module.exports = router