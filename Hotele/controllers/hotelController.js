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

exports.createHotel = async(req, res, next) => {
    try {
        let name = req.body.name;
        let country_id = req.body.country_id;
        let city_id = req.body.city_id;
        let adress = req.body.adress;
        let stars = req.body.stars;
        let phonenumber = req.body.phonenumber;
        let email = req.body.email;
        let domain = req.body.domain;

        let hotel = new Hotel(name, country_id, city_id, adress, stars, phonenumber, email, domain);
        hotel = await hotel.save()

        res.status(200).json({ message: "Hotel created", hotel })

    } catch (error) {
        console.log(error);
        next(error)
    }
}