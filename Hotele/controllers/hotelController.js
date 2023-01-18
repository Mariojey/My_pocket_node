const Hotel = require('../models/Hotel')

exports.getAllHotels = async(req, res, next) => {
    try {
        const hotels = await Hotel.findAll();

        res.status(200).json({ hotels })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getHotelById = async(req, res, next) => {
    try {
        let id = req.params.id
        const hotels = await Hotel.findHotelById(id);

        res.status(200).json({ hotels })
    } catch (error) {
        console.log(error);
        next(error)
    }
}