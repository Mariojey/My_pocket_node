const Parking = require('../models/Parking')

exports.getAllParkings = async(req, res, next) => {
    try {
        const parkings = await Parking.findAll();

        res.status(200).json({ parkings })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getParkingById = async(req, res, next) => {
    try {
        let id = req.params.id;

        const parking = await Parking.findParkingById(id);

        res.status(200).json({ parking })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getParkingByHotel = async(req, res, next) => {
    try {
        let hotel_id = req.params.id;

        const parking = await Parking.findParkingByHotel(hotel_id)

        res.status(200).json({ parking })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.createParking = async(req, res, next) => {
    try {
        let hotel_id = req.body.hotel_id;
        let numer = req.body.numer;

        let parking = new Parking(hotel_id, numer);
        parking = await parking.save();

        res.status(200).json({ message: "Parking Created", parking })
    } catch (error) {
        console.log(error);
        next(error)
    }
}