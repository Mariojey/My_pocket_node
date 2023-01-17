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