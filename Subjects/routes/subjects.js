const express = require('express');
const router = express.Router();
const Subject = require('../models/subject.js');

router.get('/', async(req, res) => {
    let query = Subject.find()
    if (req.query.name != null && req.query.name != '') {
        query = query.regex('name', new RegExp(req.query.name, 'i'))
    }
    try {
        const subjects = await query.exec()
        res.render('subjects/index', {
            subjects: subjects,
            searchOptions: req.query
        })
    } catch {
        res.redirect('/')
    }
})




module.exports = router