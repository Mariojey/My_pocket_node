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

exports.getAllRoomsExtended = async(req, res, next) => {
    try {
        const rooms = await Room.findAllExtended();

        res.status(200).json({ rooms })
    } catch (erorr) {
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

exports.getRoomByHotel = async(req, res, next) => {
    try {
        let hotel_id = req.params.id
        const rooms = await Room.findRoomByHotel(hotel_id)

        res.status(200).json({ rooms })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getRoomByFloor = async(req, res, next) => {
    try {
        let floor = req.params.floor;
        const rooms = await Room.findRoomByFloor(floor)

        res.status(200).json({ rooms })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getRoomByCountOfPeople = async(req, res, next) => {
    try {
        let count = req.params.count;
        const rooms = await Room.findRoomByCountOfPeople(count)

        res.status(200).json({ rooms })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getRoomOrderedByCountOfPeople = async(req, res, next) => {
    try {
        const rooms = await Room.orderRoomsByCountOfPeople()

        res.status(200).json({ rooms })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.createRoom = async(req, res, next) => {
    try {
        let hotel_id = req.body.hotel_id;
        let room_number = req.body.room_number;
        let floor = req.body.floor;
        let count_of_people = req.body.count_of_people;

        let room = new Room(hotel_id, room_number, floor, count_of_people)
        room = await room.save()

        res.status(200).json({ message: "Room Created", room })
    } catch (error) {
        console.log(error);
        next(error);
    }
}