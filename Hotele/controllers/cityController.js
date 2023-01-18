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

exports.getCityById = async(req, res, next) => {
    try {
        let id = req.params.id;
        const city = await City.findCityById(id)

        res.status(200).json({ city })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.createCity = async(req, res, next) => {
    try {
        let name = req.body.name;
        let code = req.body.code;

        let city = new City(name, code)
        city = await city.save()

        res.status(200).json({ message: "City Created", city })
    } catch (error) {
        console.log(error);
        next(error)
    }
}