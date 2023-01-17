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