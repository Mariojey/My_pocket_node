const Room = require('../models/Room')

exports.getAllRooms = async(req, res, next) => {
    try {
        const rooms = await Room.findAll();

        res.status(200).json({ rooms })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getRoomById = async(req, res, next) => {
    try {
        let id = req.params.id
        const room = await Room.findRoomById(id)

        res.status(200).json({ room })
    } catch (error) {
        console.log(error);
        next(error)
    }
}