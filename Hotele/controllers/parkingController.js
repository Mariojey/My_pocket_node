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