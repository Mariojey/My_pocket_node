const express = require('express');
const router = express.Router();

router.route('/').get(
    (req, res) => {
        res.status(200)
    }
)
router.route('/:id')

module.exports = router;