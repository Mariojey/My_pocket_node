const Country = require('../models/Country')

exports.getAllCountries = async(req, res, next) => {
    try {
        const countries = await Country.findAll();

        res.status(200).json({ countries })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getAllCountriesById = async(req, res, next) => {
    try {
        let id = req.params.id
        const countries = await Country.findCountryById(id)

        res.status(200).json({ countries })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.createCountry = async(req, res, next) => {
    try {
        let name = req.body.name;
        let code = req.body.code;

        let country = new Country(name, code);
        country = await country.save();

        res.status(200).json({ message: "Country Created", country })
    } catch (error) {
        console.log(error);
        next(error)
    }
}