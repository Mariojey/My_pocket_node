const express = require('express');
const router = express.Router();
const Subject = require('../models/subject.js');

router.get('/', async(req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name != '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const subjects = await Subject.find({ searchOptions })
        res.render('subjects/index', {
            subjects: subjects,
            searchOptions: req.query
        })
    } catch {
        res.redirect('/')
    }
})

router.get('/new', async(req, res) => {
    res.render('subjects/new', { subject: new Subject() })
})

router.post('/', async(req, res) => {
    const subject = new Subject({
        name: req.body.name
    })
    try {
        const newSubject = await subject.save()
        res.redirect(`subjects/${newSubject.id}`)
    } catch {
        res.render('subjects/new', {
            subject: subject,
            errorMessage: `Error creating subject`
        })
    }
})

router.get('/:id', (req, res) => {
    try {
        const subject = Subject.findById(req.params.id)
        res.render('subjects/show', {
            subject: subject
        })
    } catch {
        res.redirect('/')
    }
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