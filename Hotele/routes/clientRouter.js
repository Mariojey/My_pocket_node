const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController')

router.route('/').get(
    clientController.getAllClientsExtended
).post(
    clientController.createClient
)
router.route('/all').get(
    clientController.getAllClients
)
router.route('/country/:id').get(
    clientController.getClientByCountry
)
router.route('/city/:id').get(
    clientController.getClientByCity
)
router.route('/:id').get(
    clientController.getClientById
)
module.exports = router