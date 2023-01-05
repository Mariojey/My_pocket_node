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

router.get('/new', async(req, res) => {
    renderNewPage(res, new Subject())
})

async function renderNewPage(res, subject, hasError = false) {
    renderFormPage(res, subject, 'new', hasError)
}

async function renderFormPage(res, subject, form, hasError = false) {
    try {
        const params = {
            subject: subject
        }
        if (hasError) {
            if (form === 'new') {
                params.errorMessage = `Error Creating Subject`
            }
        }
        res.render(`subjects/new`, params)
    } catch {
        res.redirect('/subjects')
    }
}
module.exports = router