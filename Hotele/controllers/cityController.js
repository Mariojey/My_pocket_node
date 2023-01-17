const City = require('../models/City')

exports.getAllCities = async(req, res, next) => {
    try {
        const cities = await City.findAll();

        res.status(200).json({ cities })
    } catch (error) {
        console.log(error);
        next(error)
    }
}