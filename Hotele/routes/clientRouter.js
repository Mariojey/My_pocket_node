const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController')

router.route('/').get(
    clientController.getAllClients
).post(
    clientController.createClient
)

router.route('/country/:id').get(
    clientController.getClientByCountry
)

router.route('/:id').get(
    clientController.getClientById
)
module.exports = router