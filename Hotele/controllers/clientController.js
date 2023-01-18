const Client = require('../models/Client')

exports.getAllClients = async(req, res, next) => {
    try {
        const clients = await Client.findAll();

        res.status(200).json({ clients })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getClientById = async(req, res, next) => {
    try {
        let id = req.params.id
        const clients = await Client.findClientById(id);

        res.status(200).json({ clients })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.createClient = async(req, res, next) => {
    try {
        let name = req.body.name;
        let surname = req.body.surname;
        let country_id = req.body.country_id;
        let city_id = req.body.city_id;
        let adress = req.body.adress;
        let count = req.body.count;
        let documentation_id = req.body.documentation_id;

        let client = new Client(name, surname, country_id, city_id, adress, count, documentation_id)
        client = await client.save()

        res.status(200).json({ message: "Client created", client })
    } catch (error) {
        console.log(error);
        next(error)
    }
}