const express = require('express');
const router = express.Router();
const Subject = require('../models/subject')

router.get('/', async(req, res) => {
    let subjects
    try {
        subjects = await Subject.find()
    } catch {
        subjects = []
    }
    res.render('index', { subjects: subjects })
})

module.exports = router;