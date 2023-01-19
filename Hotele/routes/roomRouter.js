const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.route('/').get(
    roomController.getAllRooms
).post(
    roomController.createRoom
)

router.route('/hotel/:id').get(
    roomController.getRoomByHotel
)

router.route('/floor/:floor').get(
    roomController.getRoomByFloor
)
router.route('/count/:count').get(
    roomController.getRoomByCountOfPeople
)
router.route('/:id').get(
    roomController.getRoomById
)

module.exports = router