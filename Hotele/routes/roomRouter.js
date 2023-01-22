const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.route('/').get(
    roomController.getAllRoomsExtended
).post(
    roomController.createRoom
)
router.route('/all').get(
    roomController.getAllRooms
)
router.route('/hotel/:id').get(
    roomController.getRoomByHotel
)

router.route('/floor/:floor').get(
    roomController.getRoomByFloor
)
router.route('/count').get(
    roomController.getRoomOrderedByCountOfPeople
)
router.route('/count/:count').get(
    roomController.getRoomByCountOfPeople
)
router.route('/:id').get(
    roomController.getRoomById
)

module.exports = router